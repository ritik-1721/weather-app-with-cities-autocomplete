import { getCitiesByPrefix } from "@/utils/service";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

// import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      if (!inputValue || inputValue.trim() === "") {
        return {options:[]};
      }

      const req = await getCitiesByPrefix(inputValue);

      if (!req.ok) {
        throw new Error(`Error fetching data: ${req.status} ${req.statusText}`);
      }

      const response = await req.json();
      const options = response.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));
      return  {options} ;
    } catch (error) {
      console.error("Error:", error);
      return {options:[]};
    }
  };

  const handleOnChange = (searchData) => { 
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      key={1}
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
