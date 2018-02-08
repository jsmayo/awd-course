// select btn
var btn = document.querySelector("button");
// select the span element holding the price
var priceDisplay = document.querySelector("#price");
// could create a new variable to hold currency, then go to line 14 and replace USD hardcode, which would also replace the unit hardcode on line 15.

btn.addEventListener('click', function() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      //console.log(XHR.responseText);
      var data = JSON.parse(XHR.responseText);
      // console.log(data.bpi.GBP.rate);
      var price = data.bpi.USD.rate;
      priceDisplay.innerText = price + " USD";
    }
  }
  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
  /* Example of server response:
  {"time":{"updated":"Feb 8, 2018 08:33:00 UTC","updatedISO":"2018-02-08T08:33:00+00:00","updateduk":"Feb 8, 2018 at 08:33 GMT"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","chartName":"Bitcoin","bpi":{"USD":{"code":"USD","symbol":"&#36;","rate":"8,324.7638","description":"United States Dollar","rate_float":8324.7638},"GBP":{"code":"GBP","symbol":"&pound;","rate":"5,997.3346","description":"British Pound Sterling","rate_float":5997.3346},"EUR":{"code":"EUR","symbol":"&euro;","rate":"6,785.9228","description":"Euro","rate_float":6785.9228}}}*/
});