$(document).ready(function () {
  $("#search-btn").on("click", function (event) {
    event.preventDefault();
    var searchInput = $("#search-input").val().trim();
    unsplash(searchInput);
  });

  function unsplash(search) {
    // Unsplash API
    var unsplashKey = "3PslmuoCEMvFzIRfkyw7ksNQYvOjj8xdMYogY2RSBnY";
    var unsplashURL =
      "https://api.unsplash.com/search/photos/?query=" +
      search +
      "&client_id=" +
      unsplashKey;
    // Retrieving Unsplash API info
    $.ajax({
      url: unsplashURL,
      method: "GET",
    }).then(function (response) {
      var mainContainer = document.querySelector(".main-container");
      var imageResults = response.results;

      for (let i = 0; i < imageResults.length; i++) {
        // Create image tag
        var image = document.createElement("img");
        // Set src of image to data url
        image.setAttribute("src", imageResults[i].urls.full);
        image.setAttribute("class", "image-gallery");
        mainContainer.append(image);
        console.log(image);
      }
    });
  }

  // Google Places API
  var googleKey = "AIzaSyDHESksBbXT3HwivsjO9_9M5NkhWCBhaPk";
  var googleURL =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.5492,-81.3798&radius=32186.9&keyword=tattoo&key=" +
    googleKey;

  // Retrieving Google Places API info
  $.ajax({
    url: googleURL,
    method: "GET",
  }).then(function (response) {
    console.log(response.results);
  });
});
