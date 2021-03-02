async function getTitles(query){
  query = cleanQuery(query);
  let data = await fetch(`http://127.0.0.1:5000/titles/?query=${query}`).then(response => response.json()).then(data => data);
  return data; 
}

async function main(){
  data = await getTitles("Harry Potter");
  console.log(data);
}

/* 
  TODO: Need to remove spaces & other non-valid URL character
*/
function cleanQuery(query){
  return query; 
}

function searchTitle() {
  var x;
  // Get the value of the input field with id="searchT"
  x = document.getElementById("searchT").value;
  //alert(x);
}

main();