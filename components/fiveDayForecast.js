import {  useContext, useEffect, useState } from "react";
import { getWeatherByCity } from "./getWeatherByCoords";
import FiveDayCard from "./fiveDayCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { CityInput } from "./cityInput";
import AppContext from "@/context/appContext";

export default  function FiveDayForecast() {
    const [forecastObject, setForecastObject] = useState([]);
    const [requestStatus, setRequestStatus] = useState();
    const { app, dispatchApp } = useContext(AppContext);
    
    let { city, weather } = app;
    useEffect(() => {
    const getWeather = async() => {
      await getWeatherByCity(app.city)
        .then((response) => {
        dispatchApp({
            type: "WEATHER",
            payload: response,
            isLoaded: "true",
          });
        })
      }
    getWeather();
  }, [city]);

  async function getCityForcecast() {
      try {
        var daysArr = [];
        for (var i = 0; i < weather[0].list.length; i += 8) {
          var temps = weather[0].list[i].main.temp.toFixed(1);
          var days = new Date(weather[0].list[i].dt * 1000)
            .toString()
            .slice(0, 15);
          var maxTemp = weather[0].list[i].main.temp_max.toFixed(0);
          var minTemp = weather[0].list[i].main.temp_min.toFixed(0);
          var feelsLike = weather[0].list[i].main.feels_like.toFixed(0);
          var weatherIcon = weather[0].list[i].weather[0].icon;
          var weatherDescription = weather[0].list[i].weather[0].description;

          var iconURL = "/icons/" + weatherIcon + ".png";

          var forecastObj = {
            days: days,
            temps: temps,
            max: maxTemp,
            min: minTemp,
            feelsLike: feelsLike,
            icon: iconURL,
            description: weatherDescription,
          };
          daysArr.push(forecastObj);
        }
        console.log("weather", daysArr);
        setForecastObject(daysArr);
      } catch (error) {
        new Error("unavailable");
      }
    }
    
 async function getWeatherInfoHandler() {
    try {
      setRequestStatus("pending");      
      getCityForcecast();     
      setRequestStatus("success");
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

    return (
      <Grid>
        <Box sx={{ mt: 25, }}>
          <Box
            sx={
              {
                px: 25,
                  alignItems: "center",
                 justifyContent: "center",
              }
            }
          >
            <CityInput />
            <Box sx={{display:"grid"}}>
              <Button
                variant="outlined"
                color="inherit"
                onClick={getWeatherInfoHandler}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {requestStatus === "success" &&
            forecastObject.map((daily, index) => {
              return (
                <FiveDayCard
                  key={index}
                  city={daily.cityName}
                  date={daily.days}
                  temp={daily.temps}
                  maxTemp={daily.max}
                  feelsLike={daily.feelsLike}
                  icon={daily.icon}
                  description={daily.description}
                />
              );
            })}
        </Grid>
      </Grid>
    );
}
