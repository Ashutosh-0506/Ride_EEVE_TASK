import { useDispatch } from "react-redux";
import { updateFormData } from "../../redux/slices/formSlice";
import styles from './OutstationRoundtrip.module.css';
import { useState } from "react";

const OutstationRoundTripForm = () => {
  const dispatch = useDispatch();
  const [destinationCities, setDestinationCities] = useState([""]);

  const handleAddCity = () => {
    setDestinationCities([...destinationCities, ""]);
  };

  const handleRemoveCity = (index) => {
    if (destinationCities.length > 1) {
      const updatedCities = destinationCities.filter((_, i) => i !== index);
      setDestinationCities(updatedCities);
    }
  };

  const handleCityChange = (index, value) => {
    const updatedCities = [...destinationCities];
    updatedCities[index] = value;
    setDestinationCities(updatedCities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.destinationCities = destinationCities;
    dispatch(updateFormData({ formType: "Outstation Round Trip", data }));
    console.log("Form Data:", data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Customer Type */}
      <div className={styles.inlineContainer}>
        <h3>Customer Type</h3>
        <label>
          <input type="checkbox" name="customerType" />
          New Customer
        </label>
        <label>
          <input type="checkbox" name="customerType" />
          Existing Customer
        </label>
      </div>
      {/* Search Customer */}
      <div className={`${styles.formGroup} ${styles.searchCustomer}`}>
        <label>
          <input
            type="text"
            name="searchCustomer"
            placeholder="Search Customer by Name or Mobile Number:"
          />
        </label>
      </div>

      {/* Pickup Information */}
      <div className={styles.formGroup}>
        <label>
          Pickup Location:
          <select name="pickupLocation" required>
            <option value="">Select Pickup Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Lucknow">Lucknow</option>
          </select>
        </label>
      </div>

      {/* Destination Cities */}
      <div className={styles.formGroup}>
        {destinationCities.map((city, index) => (
          <div key={index} className={styles.destinationCity}>
            <input
              type="text"
              name={`destinationCity${index + 1}`}
              value={city}
              onChange={(e) => handleCityChange(index, e.target.value)}
              placeholder={`Destination City ${index + 1}`}
              required
            />
            <button type="button" onClick={handleAddCity}>
          Add City
        </button>
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveCity(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        
      </div>

      {/* Dates and Time */}
      <div className={styles.formGroup}>
        <label>
          From Date:
          <input type="date" name="fromDate" required />
        </label>
        <label>
          To Date:
          <input type="date" name="toDate" required />
        </label>
        <label>
          Pickup Time:
          <input type="time" name="pickupTime" required />
        </label>
      </div>

      {/* Passenger Details */}
      <div className={styles.formGroup}>
        <label>
          Passenger First Name:
          <input type="text" name="firstName" required />
        </label>
        <label>
          Passenger Last Name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Passenger Email:
          <input type="email" name="passengerEmail" required />
        </label>
        <label>
          Passenger Contact Number:
          <input type="tel" name="passengerContact" required />
        </label>
      </div>
            {/* GST and Flight */}
            <div className={`${styles.formGroup} ${styles.gstFlightRow}`}>
        <input type="checkbox" name="gst" />
        <span>GST</span>
        <input type="text" name="gstNumber" placeholder="Enter GST number" />
        <input type="checkbox" name="flight" />
        <span>FLIGHT</span>
        <input
          type="text"
          name="flightDetails"
          placeholder="Enter flight details"
        />
      </div>
      {/* Comments Section */}
      <div className={`${styles.formGroup} ${styles.commentsGroup}`}>
        <label>
          <textarea
            name="comments"
            placeholder="Comment Here For Any Specific Request For Ride:"
          ></textarea>
        </label>
      </div>

      {/* Fare Details */}
      {/* Outer Container with White Background */}
<div className={`${styles.fareDetailsContainer} ${styles.whiteContainer}`}>
  
  {/* Header */}
  <h3 className={styles.fareHeader}>Select Advanced Payable Amount </h3>
  <span className={styles.fareSubText}>(incl. all taxes)</span>
  
  {/* Inner Darker Section with Smaller Height */}
  <div className={`${styles.fareDetails} ${styles.uniqueFareDetails}`}>
    <div className={styles.fareOptions}>
      <span>
        <div>
          <input type="radio" name="payableAmount" value="0" id="payable0" className={styles.radioInput} />
          <label htmlFor="payable0" className={styles.radioLabel}>Rs 0.00</label>
        </div>
        <div className={styles.percentageBox}>0%</div>
      </span>
      <span>
        <div>
          <input
            type="radio"
            name="payableAmount"
            value="866.25"
            id="payable25"
            className={styles.radioInput}
          />
          <label htmlFor="payable25" className={styles.radioLabel}>Rs 866.25</label>
        </div>
        <div className={styles.percentageBox}>25%</div>
      </span>
      <span>
        <div>
          <input
            type="radio"
            name="payableAmount"
            value="1732.5"
            id="payable50"
            className={styles.radioInput}
          />
          <label htmlFor="payable50" className={styles.radioLabel}>Rs 1732.5</label>
        </div>
        <div className={styles.percentageBox}>50%</div>
      </span>
      <span>
        <div>
          <input
            type="radio"
            name="payableAmount"
            value="3465"
            id="payable100"
            className={styles.radioInput}
          />
          <label htmlFor="payable100" className={styles.radioLabel}>Rs 3465</label>
        </div>
        <div className={styles.percentageBox}>100%</div>
      </span>
    </div>
  </div>
</div>


      {/* Submit Button */}
<button type="submit" className={styles.submitButton}>
  Create Booking
</button>

    </form>
  );
};

export default OutstationRoundTripForm;
