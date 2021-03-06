var weather = require("weather-js");

var UserSearch = function (name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now(); // Look at the documentation for the date object. Or use Moment. Moment requires an npm!

  this.getWeather = function () {

    weather.find({ search: this.location, degreeType: "F" }, function (err, result) {

      if (err) return console.log(err);

      console.log(JSON.stringify(result, null, 2));
    });
  };
};

var testSearch = new UserSearch("Taddes", "Toronto");
console.log(testSearch);

// testSearch.getWeather(); - This is going to happen in one of our other modules.

module.exports = UserSearch;