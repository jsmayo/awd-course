var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");

// select xhr button
var btn = document.querySelector("#xhr");
// add a click event listener to the button
btn.addEventListener('click', function() {
  // once clicked, make a new hxr object and store to a variable for ref.
  var xhr = new XMLHttpRequest();
  // access the onreadystatechange property and define a function that will run each time the ready state changes
  xhr.onreadystatechange = function() {
    // each time the readystate changes, check for a DONE and 200 response
  if(xhr.status == 200 && xhr.readyState == 4) {
    // store the response from the server
    var data = JSON.parse(xhr.responseText);
    // work with the data
    console.log(data[0]);
    quote.innerText = data[0];
  }
}
  xhr.open("GET", url);
  xhr.send();
})