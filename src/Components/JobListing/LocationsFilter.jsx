import { useState } from "react";
import { handleSubmit } from "../Hooks";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faFilter,
  faChevronDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronLeft, faFilter, faChevronDown, faCircleXmark);

const LocationsFilter = ({ uniqueLocations }) => {
    


  const [formOpen, setFormOpen] = useState(false);
  const [clicked, setClicked] = useState([])

  const handleFormToggle = () => {
    setFormOpen(!formOpen);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  // Onchange Listener for radio buttons
    // checked, setChecked useState
    // isChecked method with value passed that checked if the value is exactly equal to checked
    // handleChange function that captures when a radio button is checked
    const handleChange = (event) => {
        setClicked(event.target.value)
        console.log(clicked)
    }
  return (
    <>
      <div className="locations">
        <button onClick={handleFormToggle}>
          Locations <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        </button>
        <form
          action=""
          onSubmit={handleSubmit}
          className={`form-menu ${formOpen ? "open" : ""}`}
        >
          
          <div className="location-filter">
            {uniqueLocations.map((location, key) => {
              return (
                <label key={key}>
                  <input type="checkbox" value={location} onChange={handleChange}/> {location}
                </label>
              );
            })}
          </div>
          <button>Show Results</button>
          <div className="close" onClick={closeForm}>
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
          </div>
        </form>
      </div>
    </>
  );
};

export default LocationsFilter;
