import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weather";
import type { location } from "../types/location";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function FetchWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<location | null>(null)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        setLocation({lat : position?.coords.latitude, lng : position.coords.longitude});
      },
      (error) => {console.error(error); return;},
      { enableHighAccuracy: true }
    );
  },[]);

  useEffect(() => {
    if (!location) return;

    const fetchWeatherData = async() => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lng}&appid=${API_KEY}&units=metric`);

      if (!res.ok) {
        console.log(res);
        return;
      }
    
      const data = await res.json();
      console.log(data);

      const getWeatherEmoji = (icon: string) => {
        switch (icon) {
          case "01d":
            return "☀️";
          case "01n":
            return "🌙";

          case "02d":
          case "02n":
            return "🌤️";

          case "03d":
          case "03n":
          case "04d":
          case "04n":
            return "☁️";

          case "09d":
          case "09n":
          case "10d":
          case "10n":
            return "🌧️";

          case "11d":
          case "11n":
            return "⛈️";

          case "13d":
          case "13n":
            return "❄️";

          case "50d":
          case "50n":
            return "🌫️";

          default:
            return "❓";
        }
      };

      setWeather({
        weather: data.weather[0].description,
        weatherIcon: getWeatherEmoji(data.weather[0].icon),
        temperature: data.main.temp
      })
    }
    fetchWeatherData();
  },[location]);

  return weather;
}