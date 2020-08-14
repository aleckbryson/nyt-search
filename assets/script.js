

//variables

var displayBox = $("#results")

var search ="hurricane"

var queryURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + "&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"

//API code

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    for (var i = 0; i < response.response.docs.length; i++){

        var newDiv = $("<div>")

        newDiv.html(response.response.docs[i].abstract)

        displayBox.append(newDiv)
    }
})






