var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");

// XMLHTTP SECTION
// select xhr button
var xhrBtn = document.querySelector("#xhr");
// add a click event listener to the button
xhrBtn.addEventListener('click', function() {
  // once clicked, make a new hxr object and store to a variable for ref.
  var xhr = new XMLHttpRequest();
  // access the onreadystatechange property and define a function that will run each time the ready state changes
  xhr.onreadystatechange = function() {
    // each time the readystate changes, check for a DONE and 200 response
    if (xhr.status == 200 && xhr.readyState == 4) {
      // store the response from the server
      var data = JSON.parse(xhr.responseText);
      // work with the data
      // console.log(data[0]);
      quote.innerText = data[0];
    }
  }
  xhr.open("GET", url);
  xhr.send();
})
// ------------------------------------------------------------------
// FETCH SECTION
var fetchBtn = document.querySelector("#fetch");
fetchBtn.addEventListener("click", function() {
  // fetch the response from the url you want to send the request to
  fetch(url)
    //work on the prmoise that's returned
    .then(function(res) {
      // parse into json and pass into a function that'll allow you to use it
      res.json().then(function(parsedData) {
        // this still worked without [0], but for good measure, make sure it's a string.
        // console.log(parsedData[0]);
        quote.innerText = parsedData[0];
      });
    })
    .catch(function(e) {
      console.log(e);
    });
});
// ------------------------------------------------------------------
// jQUERY SECTION
  // Make sure the jQuery CDN is included.
$("#jquery").click(function() {
  // using jQuery's syntax for selector and request methods
  $.getJSON(url)
    // a promise is returned, since XMLHttpRequst is being used per API definitions
    .done(function(data) {
      // console.log(data[0]);
      quote.innerText = data[0];
    })
    // catch any errors using the .fail method
    .fail(function() {
      alert();
    });
});
// ------------------------------------------------------------------
// AXIOS SECTION:
  // Make sure the AXIOS CDN SCRIPT IS INCLUDED!
var axiosBtn = document.querySelector("#axios");
/* went with regular selector and addEventListener instead of jQuery... since
   the point is not to include all of jQuery, but just the requests! */
axiosBtn.addEventListener("click", function() {
  // create the request using the url that you want the response from
  axios.get(url)
    // a promise is returned, so pass it into a function you can use to work w/ it
    .then(function(res) {
      // the promise returns a RESPONSE OBJECT!!!!
      // console.log(res.data);
      quote.innerText = res.data[0];
    })
    // Don't really have to work with errors with this assignement, but including because I need the practice.
    .catch(function(e) {
      alert(e);
    });
});