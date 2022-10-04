import {
    useState
} from "react";
import {
    AsyncPaginate
} from "react-select-async-paginate";
import {
    Geo_API_URL,
    GeoApiOptions
} from "../../api";

const Search = ({
        onSearchChange
    }) => {

        const [search, setSearch] = useState(null);

        const handleOnChange = (searchData) => {
            setSearch(searchData);
            onSearchChange(searchData);
        }

        const loadOptions = (inputValue) => {
            return fetch(`${Geo_API_URL}/cities?minPopulation=500000&namePrefix=${inputValue}`, GeoApiOptions)
                /* we get cities, min population with 5 hundred thousand and the prefix of the value */
                .then(response => response.json())
                .then(response => {
                    return {
                        options: response.data.map((city) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name} ${city.countryCode}`,
                            };
                        }),
                    }
                })
                .catch(err => console.error(err));
        }

        return ( <
            AsyncPaginate placeholder = "search for city"
            debounceTimeout = {
                600
            }
            value = {
                search
            }
            onChange = {
                handleOnChange
            }
            /* loading the options throught the asyinc */
            loadOptions = {
                loadOptions
            }
            />)
        }

        export default Search;