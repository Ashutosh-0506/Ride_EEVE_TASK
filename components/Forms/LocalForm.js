import { useDispatch } from "react-redux";
import { updateFormData } from "../../redux/slices/formSlice";
import styles from "./LocalForm.module.css";
const LocalForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    dispatch(updateFormData(data));
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

      {/* Pickup Details */}
      <div className={styles.formGroup}>
        <label>
          Pickup Location:
          <input
            type="text"
            name="pickupLocation"
            placeholder="Enter pickup location"
          />
        </label>
        <label>
          Pickup Date:
          <input type="date" name="pickupDate" />
        </label>
        <label>
          Pickup Time:
          <input type="time" name="pickupTime" />
        </label>
      </div>

      {/* Hourly Package and Cab Type */}
      <div className={styles.formGroup}>
        <label>
          Hourly Package:
          <input
            type="text"
            name="hourlyPackage"
            placeholder="Enter package details"
          />
        </label>
        <label>
          Cab Type:
          <select name="cabType">
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
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Passenger Email:
          <input type="email" name="passengerEmail" />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>
          Passenger Contact Number:
          <input type="text" name="passengerContact" />
        </label>
        <label>
          Pickup Address:
          <input type="text" name="pickupAddress" placeholder="Enter address" />
        </label>
        <label>
          Alternate Contact Number:
          <input type="text" name="alternateContact" />
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
      className={styles.commentsTextarea}
      placeholder="Comment Here For Any Specific Request For Ride:"
    ></textarea>
  </label>
</div>


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
          <label for="payable0" className={styles.radioLabel}>Rs 0.00</label>
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
          <label for="payable25" className={styles.radioLabel}>Rs 866.25</label>
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
          <label for="payable50" className={styles.radioLabel}>Rs 1732.5</label>
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
          <label for="payable100" className={styles.radioLabel}>Rs 3465</label>
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

export default LocalForm;
