
const AddressLocation = () => {

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
          <input type="text" placeholder="Add Address" />
        </div>
        <div className="container">
          <div className="country">
            <label htmlFor="">Country*</label>
            <select name="" id="">
              {countries.map((country) => {
                return <option>{country}</option>
              })}
            </select>
          </div>
          <div className="city">
            <label htmlFor="">City*</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div className="state">
            <label htmlFor="">State/Province*</label>
            <input type="text" placeholder="Enter State" />
          </div>
        </div>
      </>
    );
}

export default AddressLocation;