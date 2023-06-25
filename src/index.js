"use strict";
//https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
function getWeather(lat, lon, timezone) {
    return axios_1.default.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime", { params: {
            latitude: lat,
            longtitude: lon,
            timezone: timezone,
        } });
}
getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(function (res) {
    console.log(res.data);
});
