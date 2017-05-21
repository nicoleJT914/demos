#!/usr/bin/env node

var axios = require('axios')
//console.log(process.argv)

var data = {}
if (process.argv[2]) {
  data.params = {
    city: process.argv[2]
  }
}
axios.get('http://api.jirengu.com/weather.php', data)
  .then(function (response) {
    var data = response.data.results[0]
    var weather = data.weather_data[0]
    console.log(data.currentCity)
    console.log(weather.date)
    console.log(weather.temperature)
    console.log(weather.weather+','+weather.wind)
    console.log('PM2.5: '+data.pm25)
  })
  .catch(function (error) {
    console.log(error);
  });