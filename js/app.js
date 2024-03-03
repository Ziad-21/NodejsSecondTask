const request = require('request');
const forecast = require("./data/forecast")



// console.log("---------------------------------------");
const geocoding = require("./data/geocode")

const country =process.argv[2]
geocoding.geocode(country, (error, data) => {

    console.log("Geocoding error:", error);
    console.log("Geocoding result:", data);



    forecast.forecast(data.latitude, data.longtitude, (error, data) => {
        console.log("Error :" + error);
        console.log("data :" + data);
    })
    
})