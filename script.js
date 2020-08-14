
var search ="hurricane"

var queryURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + "&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    for (var i = 0; i < response.response.docs.length; i++){

        console.log(response.response.docs[i].abstract)
    }
})






