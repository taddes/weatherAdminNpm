var WeatherAdmin = require("./WeatherAdmin.js")

var action = process.argv[2];

var value = process.argv[3];

switch (action) {
    case "user":
    user();
    break;

    case "admin":
    admin();
    break;

    default:
    console.log("Please enter a valid input");

}