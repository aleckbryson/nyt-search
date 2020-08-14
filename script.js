
//variables

var displayBox = $("#results")

var search = "hurricane"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=205xGLUKGrfIcFcy6H6O0cbxQeSaYjD6"

//API code

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

var results = response.response.docs
    $("#searchBtn").on("click", function () {
        for (var i = 0; i < results.length; i++) {

            var titleDiv = $("<h3>")
            var authorDiv = $("<h4>")
            var paraDiv = $("<p>")

            titleDiv.html(results[i].headline.main)
            authorDiv.html(results[i].byline.original)
            paraDiv.html(results[i].abstract)

            displayBox.append(titleDiv)
            displayBox.append(authorDiv)
            displayBox.append(paraDiv)
        }
    })

})






