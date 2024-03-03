const request = require('request');
const forecast = (lat, lon, callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=f504955b1fd7491a8e3212944240203&q=" + lat + "," + lon;
    request({ url, json: true }, (error, response) => {

        if (error) {
            callback("There's a low level error", undefined);
        }
        else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else {
            // callback(error,data)
            callback(undefined,response.body.location.name + " "+ " Weather : " +  response.body.current.condition.text + " "+" Temperature : " + response.body.current.temp_c);

        }



    })

}
module.exports = {
    forecast:forecast
}