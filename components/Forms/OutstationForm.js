import { useDispatch } from "react-redux";
import { updateFormData } from "../../redux/slices/formSlice";
import styles from "./Forms.module.css";
import { useState } from "react";

const OutstationForm = () => {
  const dispatch = useDispatch();
  const [destinationCities, setDestinationCities] = useState([""]);

  // Function to add another destination city field
  const handleAddCity = () => {
    setDestinationCities([...destinationCities, ""]);
  };

  // Function to remove a destination city field
  const handleRemoveCity = (index) => {
    if (destinationCities.length > 1) {
      const updatedCities = destinationCities.filter((_, i) => i !== index);
      setDestinationCities(updatedCities);
    }
  };

  // Function to handle changes in destination city fields
  const handleCityChange = (index, value) => {
    const updatedCities = [...destinationCities];
    updatedCities[index] = value;
    setDestinationCities(updatedCities);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.destinationCities = destinationCities;
    dispatch(updateFormData({ formType: "Outstation", data }));
    console.log("Form Data:", data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Outstation Booking Form</h2>

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

      {/* Pickup Information */}
      <div className={styles.formGroup}>
        <label>
          Pickup Location:
          <input
            type="text"
            name="pickupLocation"
            placeholder="Enter pickup location"
            required
          />
        </label>
      </div>

      {/* Destination Cities */}
      <div className={styles.formGroup}>
        <label>Destination Cities:</label>
        {destinationCities.map((city, index) => (
          <div key={index} className={styles.destinationCity}>
            <input
              type="text"
              name={`destinationCity${index + 1}`}
              value={city}
              onChange={(e) => handleCityChange(index, e.target.value)}
              placeholder={`Destination City ${index + 1}`}
              required={index === 0} // First city is required
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveCity(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddCity}>
          Add City
        </button>
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

      {/* Cab Type */}
      <div className={styles.formGroup}>
        <label>
          Cab Type:
          <select name="cabType" required>
            <option value="">Select Cab Type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </label>
      </div>

      {/* Passenger Details */}
      <div className={styles.formGroup}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            required
          />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" placeholder="Enter last name" />
        </label>
        <label>
          Passenger Email:
          <input
            type="email"
            name="passengerEmail"
            placeholder="Enter email"
            required
          />
        </label>
      </div>

      {/* Contact Details */}
      <div className={styles.formGroup}>
        <label>
          Passenger Contact Number:
          <input
            type="tel"
            name="passengerContact"
            placeholder="Enter contact number"
            required
          />
        </label>
        <label>
          Alternate Contact Number:
          <input
            type="tel"
            name="alternateContact"
            placeholder="Enter alternate contact number"
          />
        </label>
        <label>
          Pickup Address:
          <input type="text" name="pickupAddress" placeholder="Enter address" />
        </label>
      </div>

      {/* Optional Details */}
      <div className={styles.formGroup}>
        <label>
          GST:
          <input type="checkbox" name="gst" />
          <input type="text" name="gstNumber" placeholder="Enter GST number" />
        </label>
        <label>
          Flight Details:
          <input type="checkbox" name="flight" />
          <input
            type="text"
            name="flightDetails"
            placeholder="Enter flight details"
          />
        </label>
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

      {/* Fare Selection */}
      <div className={styles.fareDetails}>
        <h3>Select Advanced Payable Amount:</h3>
        {[
          { value: "0", label: "Rs 0.00" },
          { value: "866.25", label: "Rs 866.25" },
          { value: "1732.5", label: "Rs 1732.50" },
          { value: "3465", label: "Rs 3465.00" },
        ].map((option, index) => (
          <label key={index}>
            <input type="radio" name="payableAmount" value={option.value} />
            {option.label}
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button type="submit" className={styles.submitButton}>
        Create Booking
      </button>
    </form>
  );
};

export default OutstationForm;
