const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/places/:zip/:location?", async (req, res) => {
  let location;
  if (req.params.zip !== "null") {
    const zip = req.params.zip;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${process.env.GMAPS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const { lat, lng } = data.results[0].geometry.location;
    location = lat + "%2C" + lng; // 34.414139%2C-118.554192
  } else {
    location = req.params.location;
  }
 
  const url_places = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=8050&type=restaurant&key=${process.env.GMAPS_KEY}`;
  const res2 = await fetch(url_places);
  const places = await res2.json();
  console.log(places);
  res.json(places);
});

module.exports = router;