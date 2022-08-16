// Declaring and defining variables
var searchChoice = "";
console.log(searchChoice);
// Adding event listener for click search button
$( "#submitBtn" ).click(function() {
    searchChoice = $( "searchInput").text();
    console.log(searchChoice);
  });

  