var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");
// listen for clicks
btn.addEventListener("click", function() {
  // alert("Clicked");
  var XHR = new XMLHttpRequest();
  //see when it's ready/done
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200)  {
      /* console.log(XHR.responseText);
        RESONSE: "{'status':'success','message':'https:\/\/dog.ceo\/api\/img\/terrier-norwich\/n02094258_773.jpg'}" */
      var url = JSON.parse(XHR.responseText).message;
      img.src = url;
    }
  }
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});