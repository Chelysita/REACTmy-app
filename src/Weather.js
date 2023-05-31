import React from "react";
import axios from "axios";

export default function Weather() {
  function showTemperature(response) {
    alert(`The weather in Boston is ${response.data.main.temp}°C`);
  }
  let city = "Boston";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdc6f40eaa51d2e0ae19d310a7a3769c&units=metric`;
  axios.get(url).then(showTemperature);
  return "Hello from Weather";
}
