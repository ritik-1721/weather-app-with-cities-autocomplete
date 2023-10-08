import React from "react";
// import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      {/* <label className="title">Daily</label> */}
      <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow mt-4 ">
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div 
                 className="flex flex-1 items-center justify-between py-3 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180  rounded-lg hover:bg-gray-100"
                 // className="group relative flex items-center gap-x-6  p-4 text-sm leading-6 "
                  >
                    <div class="grid grid-cols-7 gap-4 mx-3">
                      <div className="">
                        <img
                          src={`icons/${item.weather[0].icon}.png`}
                          className=" w-7 h-7"
                          alt="weather"
                        />
                      </div>
                      <div className="col-span-2">
                        {" "}
                        <span class="font-semibold text-sm   text-gray-900">
                          {forecastDays[idx]}
                        </span>
                      </div>
                      <div className="col-span-2">
                        {" "}
                        <span class="font-semibold text-sm   text-gray-900">
                          {item.weather[0].description}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span class="font-semibold text-sm   text-gray-900">
                          {Math.round(item.main.temp_max)}°C /
                          {Math.round(item.main.temp_min)}°C
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className=" items-center justify-between py-1 my-2 transition-all [&[data-state=open]>svg]:rotate-180 border border-1 rounded-lg w-full ">
                  <div class="grid grid-cols-2 gap-4 mx-2 px-2">
                    <div className="">
                      <div className="flex flex-col">
                        <div className="flex justify-between p-2">
                          <span className="text-xs text-gray-900">
                            Pressure:
                          </span>
                          <span className="font-semibold text-xs   text-gray-900">
                            {item.main.pressure}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between p-2">
                          <span className="text-xs   text-gray-900">
                            Humidity:
                          </span>
                          <span className="font-semibold text-xs   text-gray-900">
                            {item.main.humidity}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between p-2">
                          <span className="text-xs   text-gray-900">
                            Clouds:
                          </span>
                          <span className="font-semibold text-xs   text-gray-900">
                            {item.clouds.all}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <div className="flex justify-between p-2">
                          <span className="text-xs   text-gray-900">
                            Wind speed:
                          </span>
                          <span className="font-semibold text-xs   text-gray-900">
                            {item.wind.speed} m/s
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between p-2">
                          <span className="text-xs   text-gray-900">
                            Sea level:
                          </span>
                          <span className="font-semibold text-xs   text-gray-900">
                            {item.main.sea_level}m
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between p-2">
                          <span className="text-xs   text-gray-900">
                            Feels like:
                          </span>
                          <span className="font-semibold text-xs   text-gray-900">
                            {item.main.feels_like}°C
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
