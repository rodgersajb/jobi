
const AddressLocation = () => {
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
              <option value="">Select Country</option>
            </select>
          </div>
          <div className="city">
            <label htmlFor="">City*</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div className="state">
            <label htmlFor="">State*</label>
            <input type="text" placeholder="Enter State" />
          </div>
        </div>
      </>
    );
}

export default AddressLocation;