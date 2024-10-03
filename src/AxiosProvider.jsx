/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export default axios.create({
  baseURL: "https://dev.rydan-res.com/api/v1",
  headers: {
    "Content-type": "application/json",
    "Accept-Language": JSON.parse(localStorage.getItem("LANG"))
  },
});
