
     var flip = " https://www.flipkart.com/search?q="
    
// document.getElementById('openurl').addEventListener('click', function() {
//      var to_find = document.getElementById("searchbar").value.replace(" ","");
//      var url = flip + to_find
//      var urlToOpen = url;
//      window.open(urlToOpen, '_self');
//  });




document.getElementById("searchbar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
   xopen();
  }
});

document.getElementById('openurl').addEventListener("click", function() {
  xopen();
});

function xopen() {
     var to_find = document.getElementById("searchbar").value.replace(" ","");
     var url = flip + to_find
     var urlToOpen = url;
     window.open(urlToOpen, '_self');
//   return returnValue;
}