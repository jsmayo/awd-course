// api url: https://random.cat/meow
// Example request: {"file":"http:\/\/random.cat\/i\/zSpFr.jpg"}
$("#btn").click(function() {
  // alert("clicked");
  $.getJSON("https://random.cat/meow")
  .done(function(jsonData) {
    $('#catPic').attr("src", jsonData.file);
  }).fail(function() {
    alert("Request not puuurfect!!!");
  });
});