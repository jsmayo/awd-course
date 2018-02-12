var url = 'https://opentdb.com/api.php?amount=1';

//axios code

axios.get(url).then(function(res){
	console.log(res.data.results[0].question);
})
.catch(function(e){console.log(e)});  

// CDN: https://unpkg.com/axios/dist/axios.min.js
