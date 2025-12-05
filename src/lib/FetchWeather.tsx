import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const CITY = import.meta.env.VITE_WEATHER_CITY;

export default function FetchWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`);

      if (!res.ok) {
        console.log(res);
        return;
      }

      const data = await res.json();
      // console.log(data);

      let weatherText = "";
      let weatherIcon = "";
      const precip = data.current.precip_mm;
      const isDay = data.current.is_day;
      const condition = data.current.condition.text.toLowerCase();

      if (precip === 0 && isDay === 1) {
        weatherText = "맑은 낮";
        weatherIcon = "🌞";
      }
      else if (precip === 0 && isDay === 0) {
        weatherText = "맑은 밤";
        weatherIcon = "🌙";
      }
      else if (precip > 0 && precip <= 0.2) {
        weatherText = "흐림";
        weatherIcon = "☁️";
      }
      else if (precip > 0.2 && condition.includes("snow")) {
        weatherText = "눈";
        weatherIcon = "❄️";
      }
      else {
        weatherText = "비"
        weatherIcon = "🌧";
      }

      setWeather({
        weather: weatherText,
        weatherIcon,
        temperature : data.current.temp_c,
      })
    };

    fetchData();

  }, [])
  return weather;
}