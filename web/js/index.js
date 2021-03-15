async function getTitles(query){
  query = cleanQuery(query);
  let data = await fetch(`http://127.0.0.1:5000/titles/?query=${query}`).then(response => response.json()).then(data => data);
  return data; 
}

// Encode for appropriate URL usage 
function encode(query){
  /* 
    TODO: Need to remove spaces & other non-valid URL character
  */
  function cleanQuery(query){
    return query; 
  }
  query = cleanQuery(query);
  return `?query=${encodeURIComponent(query)}`;
}

function addSearchListener(){
  function sendSearch(){
    let searchInput = document.getElementById("searchT");
    if (searchInput.value != ""){
      window.location.href = `filter.html${encode(searchInput.value)}`
    } else {
      warnUserOfEmptyInput()
    }
  }

  function getCode(event) {
    var code = 0;
  
    if (event.key !== undefined) {
      code = event.key;
    } else if (event.keyIdentifier !== undefined) {
      code = event.keyIdentifier;
    } else if (event.keyCode !== undefined) {
      code = event.keyCode;
    }
  
    return code
  };
  

  document.getElementById("searchButton").addEventListener("click", sendSearch);
  document.getElementById("searchT").addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (getCode(event) === "Enter" || getCode(event) === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      sendSearch(); 
    }
  });
}

(function main(){
  addSearchListener(); 
})()

function warnUserOfEmptyInput(){
  function addWarning(){
    document.getElementById("warning").style.display = "block"; 
    document.getElementById("description").classList.remove("mb-5");
  }
  function addShadow(){
    document.getElementById("inputParent").classList.add("shadow");
  }
  function addShake(){
    document.getElementById("inputParent").classList.add("shake");
  }
  function removeShake(){
    document.getElementById("inputParent").classList.remove("shake");
  }
  addWarning(); 
  addShadow(); 
  addShake(); 
  setTimeout(removeShake, 1000 * 0.25); 
}