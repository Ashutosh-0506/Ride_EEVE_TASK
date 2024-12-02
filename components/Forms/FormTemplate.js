import { useState } from 'react';
import LocalForm from './LocalForm';
import OutstationOnewayForm from './OutstationOnewayForm';
import OutstationRoundTripForm from './OutstationRoundTripForm';
import AirportFromForm from './AirportFromForm';
import AirportToForm from './AirportToForm';
import styles from './Forms.module.css';

const FormTemplate = () => {
  const [formType, setFormType] = useState('Local'); // Tracks the main form type
  const [outstationType, setOutstationType] = useState('Oneway'); // Tracks Outstation subtype
  const [airportType, setAirportType] = useState('From'); // Tracks Airport subtype

  return (
    <div className={styles.form}>

      {/* Trip Type Buttons */}
      <div className={styles.tripTypeButtons}>
      <h3>Trip Type:</h3>
        <button
          className={`${styles.button} ${formType === 'Local' ? styles.active : ''}`}
          onClick={() => setFormType('Local')}
        >
          Local
        </button>
        <button
          className={`${styles.button} ${formType === 'Outstation' ? styles.active : ''}`}
          onClick={() => setFormType('Outstation')}
        >
          Outstation
        </button>
        <button
          className={`${styles.button} ${formType === 'Airport' ? styles.active : ''}`}
          onClick={() => setFormType('Airport')}
        >
          Airport
        </button>
      </div>

      {/* Render Forms Based on Selected Type */}
      {formType === 'Local' && <LocalForm />}

      {formType === 'Outstation' && (
        <div>
          {/* Oneway and Round Trip Buttons */}
          <div className={styles.subTypeButtons}>
            <button
              className={`${styles.button} ${outstationType === 'Oneway' ? styles.active : ''}`}
              onClick={() => setOutstationType('Oneway')}
            >
              Oneway
            </button>
            <button
              className={`${styles.button} ${outstationType === 'RoundTrip' ? styles.active : ''}`}
              onClick={() => setOutstationType('RoundTrip')}
            >
              Round Trip
            </button>
          </div>
          {/* Render Subtype Forms */}
          {outstationType === 'Oneway' && <OutstationOnewayForm />}
          {outstationType === 'RoundTrip' && <OutstationRoundTripForm />}
        </div>
      )}

      {formType === 'Airport' && (
        <div>
          {/* From the Airport and To the Airport Buttons */}
          <div className={styles.subTypeButtons}>
            <button
              className={`${styles.button} ${airportType === 'From' ? styles.active : ''}`}
              onClick={() => setAirportType('From')}
            >
              From the Airport
            </button>
            <button
              className={`${styles.button} ${airportType === 'To' ? styles.active : ''}`}
              onClick={() => setAirportType('To')}
            >
              To the Airport
            </button>
          </div>
          {/* Render Subtype Forms */}
          {airportType === 'From' && <AirportFromForm />}
          {airportType === 'To' && <AirportToForm />}
        </div>
      )}
    </div>
  );
};

export default FormTemplate;
