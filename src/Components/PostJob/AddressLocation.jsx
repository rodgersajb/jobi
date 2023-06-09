
const AddressLocation = (props) => {
    const {address, handleAddressChange, country, handleCountryChange, location, handleLocationChange, state, handleStateChange} = props;
   
    
    const countries = [
      "United States",
      "Canada",
      "Mexico",
      "Brazil",
      "Argentina",
      "United Kingdom",
      "Germany",
      "France",
      "Spain",
      "Italy",
      "Russia",
      "China",
      "Japan",
      "India",
      "Australia",
      "New Zealand",
      "South Africa",
      "Egypt",
      "Nigeria",
      "Kenya",
    ];

    return (
      <>
        <h4>Address & Location</h4>
        <div className="address">
          <label htmlFor="">Address*</label>
          <input
            type="text"
            placeholder="Add Address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="container">
          <div className="country">
            <label htmlFor="">Country*</label>
            <select
              name=""
              id=""
              value={country}
              onChange={handleCountryChange}
              required
            >
              <option value="">Please Select</option>
              {countries.map((country) => {
                return <option>{country}</option>;
              })}
            </select>
          </div>
          <div className="city">
            <label htmlFor="">City*</label>
            <input
              type="text"
              placeholder="Enter City"
              value={location}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div className="state">
            <label htmlFor="">State/Province*</label>
            <input
              type="text"
              placeholder="Enter State"
              value={state}
              onChange={handleStateChange}
              required
            />
          </div>
        </div>
      </>
    );
}

export default AddressLocation;