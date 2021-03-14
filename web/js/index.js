async function getTitles(query){
  query = cleanQuery(query);
  let data = await fetch(`http://127.0.0.1:5000/titles/?query=${query}`).then(response => response.json()).then(data => data);
  return data; 
}


/* 
  TODO: Need to remove spaces & other non-valid URL character
*/
function cleanQuery(query){
  return query; 
}

function searchTitleg() {
  var x;
  // Get the value of the input field with id="searchT"
  x = document.getElementById("searchT").value;
  //alert(x);
}


// ONLY FOR TESTING PURPOSES
(async function main(){
  data = await getTitles("Harry Potter");
  console.log(data);
})();

// adds event listener to search button 
document.getElementById("searchButton").addEventListener("click", function() {
  // gets inner text 
  let searchInput = document.getElementById("searchT");
  if (searchInput.value != ""){
    window.location.href = `/filter.html${encode(searchInput.value)}`
  }
});

// Encode for appropriate URL usage 
function encode(query){
  return `?query=${encodeURIComponent(query)}`;
}