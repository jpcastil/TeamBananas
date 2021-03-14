//main function that will load all the title's information
function loadTitleInfo() {
  var x;
  var list = ["Drama", "Animation"];
  var list2 = ["Sex & Nudity", "Violence & Gore", "Profanity"]
  var date = "25 December 2020";
  var plot = "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.";
  // Get the value of the input field with id="searchT"
  x = document.getElementById("filterName").innerHTML;
  var res = x.replace("MOVIE", "SOUL");
  document.getElementById("filterName").innerHTML = res;
  loadTitleName("Soul");
  loadTitleRating("pg");
  loadTitleData(list, 107, date);
  loadTitlePlot(plot);
  loadTitlePoster("https://803277.smushcdn.com/1580116/wp-content/uploads/2020/03/pixar-reveals-new-poster-for-soul-and-teases-trailer-release-tomorrow.jpeg?lossy=0&strip=0&webp=1");
  displayTriggers(list2);
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