function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Encode for appropriate URL usage 
function encode(query){
    return `?query=${encodeURIComponent(query)}`;
}

// Decodes the query into machine readable
function decode(encoded){
    return decodeURIComponent(encoded.substring(7))
}

function getParentTitles(){
    return document.getElementById("titles"); 
}

// Removes all titles (posters, time, etc) from the page
function clearTitles(){
    getParentTitles().innerHTML = ""; 
}

function createTitleHTML(posterURL, name, year, time, genres){
    let div = document.createElement('div');
    div.classList.add("col-md-4", "mb-5");

    let innerDiv = document.createElement('div');
    innerDiv.classList.add("card", "h-100");
    innerDiv.style.maxWidth = "24rem";

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = posterURL;

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-body");

    let h4 = document.createElement("h4");
    h4.classList.add("card-title");
    h4.innerText = name; 

    let p = document.createElement("p");
    p.innerText = String(year) + " | " + String(time) + " | " + String(genres);
    p.classList.add("card-text");


    cardDiv.appendChild(h4);
    cardDiv.appendChild(p);

    innerDiv.appendChild(img);
    innerDiv.appendChild(cardDiv);

    div.appendChild(innerDiv);
    return div;
}

// Converts N minutes to Xhr Ym format
function beautifyMinutes(n){
    let hours = Math.floor(n / 60);
    let minutes = n % 60; 

    h = hours > 0 ? `${hours}h` : ""; 
    mins = minutes > 0 ? `${minutes}m`: ""; 

    return h + " " + mins; 
}

// converts list of genres to a presentable genre1/genre2
function beautifyGenres(genres){
    if (genres.length == 0){
        return ""; 
    }
    if (genres.length == 1){
        return genres[0].trim();
    }
    return genres[0].trim() + "/" + genres[1].trim(0);
}

window.onload = function(){
    if (window.location.href.indexOf("=") == -1){
        return;
    }
    let index = window.location.href.indexOf("=")
    console.log(window.location.href.substring(index + 1))
    
}

clearTitles(); 

let title =  {
    "IMDBid": "tt0241527", 
    "_id": "603dbf6b25c254c6f95a99f1", 
    "date": 2001, 
    "genre": [
      "Adventure", 
      "Family", 
      "Fantasy"
    ], 
    "mpa": "PG", 
    "name": "Harry Potter and the Sorcerer's Stone", 
    "plot": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", 
    "poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg", 
    "time": 152, 
    "titleType": "movie", 
    "triggers": [
      "nudity", 
      "violence", 
      "profanity", 
      "alcohol", 
      "frightening"
    ]
}; 

let titles = document.getElementById("titles");
let titleHTML = createTitleHTML(title.poster, title.name, title.date, beautifyMinutes(title.time), beautifyGenres(title.genre)); 
titles.appendChild(titleHTML)

titleHTML = createTitleHTML(title.poster, title.name, title.date, beautifyMinutes(title.time), beautifyGenres(title.genre)); 
titles.appendChild(titleHTML)

titleHTML = createTitleHTML(title.poster, title.name, title.date, beautifyMinutes(title.time), beautifyGenres(title.genre)); 
titles.appendChild(titleHTML)

titleHTML = createTitleHTML(title.poster, title.name, title.date, beautifyMinutes(title.time), beautifyGenres(title.genre)); 
titles.appendChild(titleHTML)

console.log(titles);
console.log(titleHTML)
titles.appendChild(titleHTML)

