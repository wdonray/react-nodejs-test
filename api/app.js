const express = require("express");
const testAPIRouter = require("./testAPI");
const cors = require("cors");
const request = require("request");

// express app
const app = express();
// listen for request
app.listen(4000);
app.use(cors());
app.use("/testAPI", testAPIRouter);
app.get("/getWeather", (req, res) => {
  request(
    "http://api.weatherapi.com/v1/current.json?key=ab7e870cf7f240388cb35929202809&q=70508",
    (err, response, body) => {
      if (!err && response.statusCode == 200) {
        let parsedBody = JSON.parse(body);
        let temp_f = parsedBody["current"]["temp_f"];
        res.send({ temp_f });
      }
    }
  );
});
