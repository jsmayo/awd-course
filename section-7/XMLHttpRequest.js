// Example of making an XMLHttpRequest

var XHR = new XMLHttpRequest();
/*
Taking advantage of the READY STATE by using the ONREADYSTATECHANGE property to
  define my objective... This is also where I make sure that the DONE status
  was fired and that the server sent back a successful response code (200).
  READY STATES:
    4 - Done
    3 - headers_received
    2 - Request Sent
    1 - Request Created via open
 */
XHR.onreadystatechange = function() {
  if (XHR.readyState == 4 && XHR.status == 200) {
    // responseText stores the data retrieved from the request.
    console.log(XHR.responseText);
  } else {
    console.log("There was a problem!");
  }
}
XHR.open("GET", "https://api.github.com/zen");
XHR.send();