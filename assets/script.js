<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Bulma.io Framework -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
    />

    <!-- Font Awesome  -->
    <script
      src="https://kit.fontawesome.com/f4677e3cb7.js"
      crossorigin="anonymous"
    ></script>


    <!-- Custom Style Sheet  -->
    <link rel="stylesheet" href="assets/style.css" />
    <title>Inkmap</title>
  </head>

  <body>
    <!-- Splash Page -->
    <div class="hero-image">
      <!-- InkMap logo -->
      <img class="whiteblot" src="assets/images/whitblot.png" alt="ink blot" />
      <a href="https://fontmeme.com/fonts/tattoo-ink-font/">
        <img
          src="https://fontmeme.com/permalink/200927/703c0397a10b2ae4e16acb5cb6be3e9a.png"
          alt="tattoo-ink-font"
      /></a>
      <a href="https://fontmeme.com/sans-serif-fonts/">
        <img
          src="https://fontmeme.com/permalink/200927/dda6becbcb5255a19e5d0dc21e4ddd25.png"
          alt="sans-serif-fonts"
      /></a>
      <!-- Button to take user to the search page -->
      <div id="searchLink">
        <a href="search.html" class="search-link"
          ><button class="button is-large is-fullwidth is-light is-rounded">
            Find Your Inspiration
          </button></a
        >
      </div>
    </div>

    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- our js  -->
    <script src="assets/script.js"></script>
  </body>
</html>

      // Display every image generated from the search
      for (let i = 0; i < imageResults.length; i++) {
        // Create image tag
        var image = document.createElement("img");
        // Set src of image to data url
        image.setAttribute("src", imageResults[i].urls.full);
        mainContainer.append(image);
      }
    });
  }
});

