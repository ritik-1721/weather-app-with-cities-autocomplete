import { fetchGet } from "@/utils/fetchUtils";
import * as apiEndpoints from "@/utils/apiEndpoints";
import { RAPIDAPI_API_KEY, WEATHER_API_KEY } from "./constants";

// Common function to build a query string from parameters
const buildQueryString = (paramsObject) => {
  const params = new URLSearchParams(paramsObject);
  return params.toString();
};

//GEO API SERVICES --------------------------------------------------------------------------------------------
export const geoApiHeaders = {
  "X-RapidAPI-Key": RAPIDAPI_API_KEY,
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
};

export const getCitiesByPrefix = async (namePrefix) => {
  return await fetchGet(
    `${apiEndpoints.GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${namePrefix}`,
    geoApiHeaders
  );
};

//WEATHER API SERVICES ----------------------------------------------------------------------------------------
export const weatherApiParamsDefault = {
  units: "metric",
  appid: WEATHER_API_KEY,
};

export const getCurrentWeather = async (weatherApiParams) => {
  const mergedParams = {
    ...weatherApiParamsDefault, // Apply default values
    ...weatherApiParams, // Override with provided values
  };
  const queryString = buildQueryString(mergedParams);
  return await fetchGet(
    `${apiEndpoints.WEATHER_API_URL}/weather?${queryString}`
  );
};

export const getForecast = async (weatherApiParams) => {
  const mergedParams = {
    ...weatherApiParamsDefault, // Apply default values
    ...weatherApiParams, // Override with provided values
  };
  const queryString = buildQueryString(mergedParams);
  return await fetchGet(
    `${apiEndpoints.WEATHER_API_URL}/forecast?${queryString}`
  );
};
