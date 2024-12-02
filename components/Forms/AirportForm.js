import { useDispatch } from 'react-redux';
import { updateFormData } from '../../redux/slices/formSlice';
import styles from './Forms.module.css';
import { useState } from 'react';

const AirportForm = () => {
  const dispatch = useDispatch();
  const [destinationCities, setDestinationCities] = useState(['']);

  const handleAddCity = () => {
    setDestinationCities([...destinationCities, '']);
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
    dispatch(updateFormData(data));
    console.log('Form Data:', data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Airport Form</h2>

      {/* Direction Selection */}
      <div>
        <label>
          Direction:
          <select name="direction">
            <option value="fromAirport">From the Airport</option>
            <option value="toAirport">To the Airport</option>
          </select>
        </label>
      </div>

      {/* Search Customer */}
      <div>
        <label>
          Search Customer by Name or Mobile Number:
          <input
            type="text"
            name="searchCustomer"
            placeholder="Enter customer name or mobile number"
          />
        </label>
      </div>

      {/* Pickup Details */}
      <div>
        <label>
          Pickup Location:
          <input
            type="text"
            name="pickupLocation"
            placeholder="Enter pickup location"
          />
        </label>
      </div>

      {/* Dynamic Destination Cities */}
      <div>
        {destinationCities.map((city, index) => (
          <div key={index} className={styles.destinationCity}>
            <label>
              Destination City {index + 1}:
              <input
                type="text"
                name={`destinationCity${index + 1}`}
                value={city}
                onChange={(e) => handleCityChange(index, e.target.value)}
                placeholder="Enter destination city"
              />
            </label>
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

      {/* Date and Time */}
      <div>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
      </div>

      {/* Passenger Details */}
      <div>
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
      <div>
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

      {/* GST and Flight Checkboxes */}
      <div>
        <label>
          GST:
          <input type="checkbox" name="gst" />
          <input type="text" name="gstNumber" placeholder="Enter GST number" />
        </label>
      </div>
      <div>
        <label>
          Flight:
          <input type="checkbox" name="flight" />
          <input
            type="text"
            name="flightDetails"
            placeholder="Enter flight details"
          />
        </label>
      </div>

      {/* Comments Section */}
      <div>
        <label>
          Comments:
          <textarea
            name="comments"
            placeholder="Enter specific ride requests"
          ></textarea>
        </label>
      </div>

       {/* Fare Details */}
       <div className={styles.fareDetails}>
        <h3>Select Advanced Payable Amount (incl. all taxes):</h3>
        <label>
          <input type="radio" name="payableAmount" value="0" /> Rs 0.00
        </label>
        <label>
          <input type="radio" name="payableAmount" value="866.25" /> Rs 866.25
        </label>
        <label>
          <input type="radio" name="payableAmount" value="1732.5" /> Rs 1732.5
        </label>
        <label>
          <input type="radio" name="payableAmount" value="3465" /> Rs 3465
        </label>
        <div className={styles.percentages}>
          <span>0%</span>
          <span>25%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit">Create Booking</button>
    </form>
  );
};

export default AirportForm;
