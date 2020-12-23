/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";

const unsplashKey = "3PslmuoCEMvFzIRfkyw7ksNQYvOjj8xdMYogY2RSBnY";
const fsID = "QPSDG0BWEJ2SWKAPIMIEBFKJZL4XU51PA5EMQALJMYO2Z2E2";
const fsSecret = "TASRGKCER0ST3KUGSDC14BMJQUF3IP0IB5BV05ASRRAWG40N";

export default {
  // On default page will load images of tattoos
  defaultData: function () {
    return Axios.get(
      "https://api.unsplash.com/search/photos/?query=tattoo&client_id=" +
        unsplashKey +
        "&per_page=12"
    );
  },

  // API call to get images from Unsplash
  getData: function (query) {
    return Axios.get(
      "https://api.unsplash.com/search/photos/?query=" +
        query +
        "&client_id=" +
        unsplashKey +
        "&per_page=12"
    );
  },

  foursquare: function () {
    return Axios.get(
      "https://api.foursquare.com/v2/venues/explore?client_id=" +
        fsID +
        "&client_secret=" +
        fsSecret +
        "&v=20180323&limit=10&ll=28.5383,-81.3792&query=tattoo"
    );
  },
};
