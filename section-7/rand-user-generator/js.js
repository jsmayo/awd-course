// https://randomuser.me/api/
var url = "https://randomuser.me/api/";
var nameDisplay = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var userID = document.querySelector("#username");
var emailDisplay = document.querySelector("#email");
var cityDisplay = document.querySelector("#city");

var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  // alert("test for connection");
  fetch(url) //return a promise
    .then(handleErr) // first thing to do with promise is check for !200 status code
    .then(parseJSON) // extract data from returned promise and use JSON form
    .then(updateProfile) // perform action using extracted data to update the profile
    .catch(printErr); // catch the error thrown if !200 and do something with it..
});

function handleErr(res) {
  // need to check for 404 or status code that is not 200, then throw an error.
  if (!res.ok) throw Error(res.status);
  // if everything is okay, just return the response promise
  return res;
}

// Extracting the data from the returned response (that was checked for status of 200) and returning.
function parseJSON(res) {
  /*
   1. Pass res.json's promise object into the function as parsedData parameter,
      then extract the correct data, which is stored in parsedData.results[0],
      and return it back to the next .then method.

    2. DO NOT FORGET THIS FIRST RETURN, which takes the second return "parsedData"
      and uses it to return/pass to the next .then method, which is updateProfile.
   */
  return res.json().then(function(parsedData) {
    return parsedData.results[0];
  });
}

// Using the returned JSON object to update the profile
function updateProfile(data) {
  //console.log(data);
  var fullName = data.name.first + " " + data.name.last;
  nameDisplay.innerText = fullName;
  console.log(fullName);
  avatar.src = data.picture.large;
  userID.innerText = data.login.username;
  emailDisplay.innerText = data.email;
  cityDisplay.innerText = data.location.city;
}

// If an error was thrown during handleErr, then log it to console.
function printErr(error) {
  console.log(error, error.status);
}