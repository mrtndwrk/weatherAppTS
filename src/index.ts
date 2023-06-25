//https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime

import axios from 'axios';

function getWeather(lat: any, lon: any, timezone: any) {
  return axios.get(
    'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime',
    {
      params: {
        latitude: lat,
        longtitude: lon,
        timezone,
      },
    },
  ).then(({data}) => {
    return{
        current: parseCurrentWeather(data),
        daily: parseDailyWeather(data),
    }
  })
}

function parseCurrentWeather(current_weather: any, daily_Weather: any) {
    const { 
        temperature: currentTemp, 
        windspeed: windSpeed, 
        weathercode: iconCode
    } = current_weather;

    const{
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        precipitation_sum: [precip],
    }= daily_Weather;

    return{
        currentTemp: Math.round(currentTemp),
        precip: Math.round(precip*100/100),
        windSpeed: Math.round(windSpeed), 
        iconCode
    }
}

function parseDailyWeather(data: any) {

}

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
  (res) => {
    console.log(res.data);
  },
);
