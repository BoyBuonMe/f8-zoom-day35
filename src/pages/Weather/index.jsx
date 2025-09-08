import React from "react";
import styles from "./Weather.module.scss";

function Weather() {
  const weatherData = {
    hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
    hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
    danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
  };
  //   console.log(Object.keys(weatherData));

  const [city, setCity] = React.useState(Object.keys(weatherData)[0]);
  const [data, setData] = React.useState(weatherData[city]);

  {
    console.log(weatherData[city]);
  }

  const handleChange = (e) => {
    setCity(e.target.value);
    setData(weatherData[e.target.value]);
  };

  const handleRefresh = () => {
    const randomTemp = data.temp + (Math.floor(Math.random() * 11) - 5);
    const randomHumidity = data.humidity + Math.floor(Math.random() * 11) - 5;

    setData({
      ...data,
      temp: Math.max(0, randomTemp),
      humidity: Math.min(100, Math.max(0, randomHumidity)),
    });
  };

  const getWeatherIcon = (weather) => {
    const text = weather.toLowerCase();
    if (text.includes("mưa")) return "🌧️";
    if (text.includes("nắng")) return "☀️";
    if (text.includes("mây")) return "⛅";
    return "🌤️";
  };

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherCard}>
        <h2 className={styles.weatherTitle}>🌍 Weather App</h2>

        <select
          className={styles.weatherSelect}
          value={city}
          onChange={handleChange}
        >
          {Object.keys(weatherData).map((key) => (
            <option key={key} value={key}>
              {weatherData[key].city}
            </option>
          ))}
        </select>

        <p className={styles.weatherInfo}>
          🌡️ Nhiệt độ: <span>{data.temp}°C</span>
        </p>
        <p className={styles.weatherInfo}>
          {getWeatherIcon(data.weather)} {data.weather}
        </p>
        <p className={styles.weatherInfo}>
          💧 Độ ẩm: <span>{data.humidity}%</span>
        </p>

        <button className={styles.weatherButton} onClick={handleRefresh}>
          🔄 Làm mới
        </button>
      </div>
    </div>
  );
}

export default Weather;
