const express = require("express");
const router = express.Router();

const axios = require("axios");

router.get("/bit", function (req, res, next) {
  axios
    .get("http://fs1.co.il/bus/bitcoin.php")
    .then(function (response) {
      // console.log(response.data);
      const json_ar = response.data;
      for (let i in json_ar) {
        json_ar[i].myPrice = Number(json_ar[i].price_usd).toFixed(2);
      }
      res.render("bit", { title: "Bit", _ar: json_ar });
    })
    .catch(function (error) {
      console.log(error);
    });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
