import { useEffect, useState } from "react";
import {getWeatherbyCoords} from "./getWeatherByCoords";
import WeatherCard from "./weatherCard";
import Box from "@mui/material/Box";

function CityInfoForm() {
  const [requestStatus, setRequestStatus] = useState();
  const [currentWeather, setCurrentWeather] = useState([]);
  var daysArr = [];
    const getLocation = () => {
    setRequestStatus("pending");
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherbyCoords(
        position.coords.latitude,
        position.coords.longitude
      )
        .then((data) => {
        var day = new Date(data.dt * 1000).toString().slice(0, 24);
        var temp = data.main.temp.toFixed(0);
        var maxTemp = data.main.temp_max.toFixed(0);
        var minTemp = data.main.temp_min.toFixed(0);
        var feelsLike = data.main.feels_like.toFixed(0);
        var cityName = data.name.toString();
        var weatherIcon = data.weather[0].icon;
        var iconURL = "/icons/" + weatherIcon + ".png";
        daysArr.push({
          cityName,
          day,
          temp,
          maxTemp,
          minTemp,
          feelsLike,
          iconURL,
        });
        console.log("data:: ", daysArr);

        setCurrentWeather(daysArr);
      });
      setRequestStatus("success");
    });
  };

    useEffect(() => {
        getLocation();
  }, []);

  

  return (
      <section>
    {
       requestStatus === "pending" && <Box m={5}> Current Weather for your location loading...</Box> 
    }
      {
        requestStatus === "success" &&
        currentWeather.map((day, index) => {
          return (
            <div key={index}>
              <WeatherCard
                city={day.cityName}
                date={day.day}
                temp={day.temp}
                maxTemp={day.maxTemp}
                feelsLike={day.feelsLike}
                icon={day.iconURL}
              />
            </div>
          );
        })}
    </section>
  );
}

export default CityInfoForm;
