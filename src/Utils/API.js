import Axios from "axios";

const unsplashKey = "3PslmuoCEMvFzIRfkyw7ksNQYvOjj8xdMYogY2RSBnY";

export default {
  // API call to get the results for either anime/manga (using drop) and the desired search query (using query)

  getData: function (search) {
    console.log(search);
    return Axios.get(
      "https://api.unsplash.com/search/photos/?query=" +
        "tatoo" +
        "&client_id=" +
        unsplashKey
    );
  },
};
