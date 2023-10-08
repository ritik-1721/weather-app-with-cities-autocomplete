import Search from "@/components/search";
import CurrentWeather from "@/components/current-weather";
import Forecast from "@/components/forecast";
import { getCurrentWeather, getForecast } from "@/utils/service";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [currentWeatherLoading, setCurrentWeatherLoading] = useState(false);
  const [forecastLoading, setForecastLoading] = useState(false);

  const handleOnSearchChange = async (searchData) => {
    try {
      setCurrentWeatherLoading(true);
      setForecastLoading(true);
      setCurrentWeather(null);
      setForecast(null);
      const [lat, lon] = searchData.value.split(" ");
      const [currentWeatherReq, forecastReq] = await Promise.all([
        getCurrentWeather({ lat, lon }),
        getForecast({ lat, lon }),
      ]);
      if (currentWeatherReq.ok) {
        const weatherResponse = await currentWeatherReq.json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentWeatherLoading(false);
        setForecastLoading(false);
      }
      if (forecastReq.ok) {
        const forcastResponse = await forecastReq.json();
        setForecast({ city: searchData.label, ...forcastResponse });
        setCurrentWeatherLoading(false);
        setForecastLoading(false);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setCurrentWeatherLoading(false);
      setForecastLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div class="w-full max-w-sm mx-auto">
        <div class="bg-white shadow rounded-lg p-5 max-w-lg mx-auto  min-h-[90vh] m-4  flex flex-col">
          <Search onSearchChange={handleOnSearchChange} />
          <div class="overflow-y-auto">
            {currentWeatherLoading && (
              <div
                href="javascript:;"
                className="block max-w-sm pb-8 p-4 bg-gray-100 animate-pulse border border-gray-200 rounded-lg shadow hover:bg-gray-50 h-60 mt-4 "
              ></div>
            )}
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecastLoading && (
              <div
                href="javascript:;"
                className="block max-w-sm pb-8 p-4 bg-gray-100 animate-pulse border border-gray-200 rounded-lg shadow hover:bg-gray-50 h-72 mt-4 "
              ></div>
            )}
            {forecast && <Forecast data={forecast} />}
          </div>
          <span class="block text-sm text-gray-500 mt-auto pt-4 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://github.com/ritik-1721" class="hover:underline">
              Ritik Pawar
            </a>
            . Public Repository.
          </span>
        </div>
      </div>
    </div>
  );
}
