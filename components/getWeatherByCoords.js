

export async function getWeatherbyCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.key}&units=imperial`;
  return fetch(url).then((response) => {
   console.log("Weather response: ", response);
   return response.json();
  });
}
export async function getWeatherByCity(enteredCity) {
  const url =
    `https://api.openweathermap.org/data/2.5/forecast?q=${enteredCity}&units=imperial&appid=${process.env.key}&exclude=hourly`;
  return fetch(url).then((response) => {
   // console.log("city search response: ", response);
    return response.json();
  });
}
