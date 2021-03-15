//main function that will load all the title's information
function loadTitleInfo(name, genres, triggers, date, plot, type, rating, image) {
  var x;
  var list = genres;
  var list2 = triggers.map(str => capFirstChar(str));; 
  var date = date;
  // Get the value of the input field with id="searchT"
  x = document.getElementById("filterName").innerHTML;
  var res = x.replace("MOVIE", type.toUpperCase());
  document.getElementById("filterName").innerHTML = res;
  loadTitleName(name);
  loadTitleRating(rating);
  loadTitleData(list, 107, date);
  loadTitlePlot(plot);
  loadTitlePoster(image);
  displayTriggers(list2);
}

function capFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// "name" : takes in name string to display on title page & capitalizes it
function loadTitleName(name) {
  document.getElementsByClassName("title-name")[0].textContent = name.toUpperCase();
}

// "mpa" : takes in mpa string to display title rating
function loadTitleRating(rating) {
  // Get the value of the input field with class="rating"
  document.getElementsByClassName("rating")[0].textContent = rating.toUpperCase();
}
// "genre" "time" "date" : takes in list, int and int to display title genre(s), length, & date respectively
function loadTitleData(genreList, time, date) {
  var length = convertTime(time);
  var genre = displayGenres(genreList);
  var info = length + " | " + genre + " | " + date;
  // Get the value of the input field with class="title-name"
  var x = document.getElementsByClassName("title-data")[0].innerHTML;

  document.getElementsByClassName("title-data")[0].textContent = info;
}

// "plot" : takes in plot string to display title plot description
function loadTitlePlot(plot) {
  document.getElementsByClassName("title-plot")[0].innerHTML = "<br>" + plot + "<br>";
}

// "poster" : takes in poster string to display the title poster image
function loadTitlePoster(url){
  document.getElementById("poster").src= url;
}

// "time" : converts it to a string to display
function convertTime(time){
  var minutes = time % 60;
  var hours = Math.floor(time/60);
  if (hours == 0){
    return minutes + "min";
  }
  else if (minutes == 0){
    return hours + "hr ";
  }
  else{
    return hours + "hr " + minutes + "min";
  }
}

// "genre" : takes in the list of genres and converts it to a string to display
// Q: if there is only one genre will the genre variable still be a list or a string?
function displayGenres(genre){
  var res = "";
  for (index = 0; index < genre.length; index++) {
    res += genre[index] + "/";
  }
  res = res.substr(0, res.length-1);
  return res;
}

// "triggers" : takes in the list of triggers and displays them on the title page
function displayTriggers(triggers) {
  for (index = 0; index < triggers.length; index ++)
  {
    var node = document.createElement("button");
    node.setAttribute("type", "button");
    node.className = "btn btn-dark";
    var textnode = document.createTextNode(triggers[index]);
    node.appendChild(textnode);
    document.getElementById("triggers").appendChild(node);
  }
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.onload = function main(){
  let id = getParameterByName("query"); 
  let title = JSON.parse(localStorage.getItem(id)); 
  console.log(title)

  // (name, genres, triggers, date, plot, type, rating, image)

  loadTitleInfo(title.name, title.genre, title.triggers, title.date, title.plot, title.titleType, title.mpa, title.poster)
}