import Image from "next/image";
import React from "react";
// import Image from "next/image";

const CurrentWeather = ({ data }) => {
  return (
    <>
    
      <a
        href="javascript:;"
        className="block max-w-sm pb-8 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-4 "
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold pt-5">{data.city}</span>
            <span className="font-semibold text-gray-500">
              {data.weather[0].description}
            </span>
          </div>

          <img alt="weather" src={`icons/${data.weather[0].icon}.png`} />
        </div>

        <div className="flex justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-6xl font-bold pt-4">
              {Math.round(data.main.temp)}°C
            </span>
          </div>

          <div className="flex flex-col w-32">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="font-semibold text-xs   text-gray-900">
                  Details
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-xs  text-gray-900">Feels like:</span>
                <span className="font-semibold text-xs   text-gray-900">
                  {Math.round(data.main.feels_like)}°C
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-xs  text-gray-900">Wind:</span>
                <span className="font-semibold text-xs  text-gray-900">
                  {data.wind.speed} m/s
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-xs   text-gray-900">Humidity:</span>
                <span className="font-semibold text-xs   text-gray-900">
                  {data.main.humidity}%
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-xs   text-gray-900">Pressure:</span>
                <span className="font-semibold text-xs   text-gray-900">
                  {data.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CurrentWeather;
