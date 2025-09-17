import fetchWeather from '../lib/FetchWeather'
import Skeleton from 'react-loading-skeleton';

export default function WeatherBox() {
  const weather = fetchWeather();

  return (
    <div className='weather-box'>
      {weather ? (
        <>
          <span>{weather?.weatherIcon}</span>
          <span>{weather?.temperature + "°C"}</span>
        </>) : <Skeleton width={50} height={20}/>}
    </div>
  )
}