/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";

const unsplashKey = "3PslmuoCEMvFzIRfkyw7ksNQYvOjj8xdMYogY2RSBnY";

export default {
  // On default page will load images of tattoos
  defaultData: function () {
    return Axios.get(
      "https://api.unsplash.com/search/photos/?query=tattoo&client_id=" +
        unsplashKey
    );
  },

  // API call to get images from Unsplash
  getData: function (query) {
    return Axios.get(
      "https://api.unsplash.com/search/photos/?query=" +
        query +
        "&client_id=" +
        unsplashKey
    );
  },
};
