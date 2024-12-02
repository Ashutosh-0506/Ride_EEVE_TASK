import styles from "./FareDetails.module.css"; // Import the new CSS file

const FareDetails = () => {
  return (
    <div className={styles.fareDetails}>
      {/* Progress Bar */}
      <div className={styles.progress}>
        <div className={styles.stage}>All Bookings</div>
        <div className={styles.stage}>Pending Bookings</div>
        <div className={`${styles.stage} ${styles.active}`}>
          Create New Booking
        </div>
      </div>

      {/* Fare Details Section */}
      <div className={styles.fareDetailSection}>
        <h3>Fare Details</h3>
      </div>
      <div className={styles.row}>
        <span>Ride Estimate</span>
        <span>₹00.00</span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.row}>
        <span>Included Hrs/Rate</span>
        <span>0 Hrs</span>
      </div>
      <div className={styles.row}>
        <span>Included Kms</span>
        <span>0 Hrs</span>
      </div>
      <div className={styles.row}>
        <span>Base Fare</span>
        <span>₹00.00</span>
      </div>
      <div className={styles.row}>
        <span>GST @5%</span>
        <span>₹00.00</span>
      </div>

      {/* Inclusions Section */}
      <div className={styles.inclusions}>
        <h4>Inclusions</h4>
      </div>
      <div className={styles.fareDetailSection}>
        <div className={styles.packet}>
          <div>Base Fare</div>
          <div>GST @5%</div>
        </div>
      </div>

      {/* Exclusions Section */}
      <div className={styles.exclusions}>
        <h4>Exclusions</h4>
      </div>
      <div className={styles.fareDetailSection}>
        <div className={styles.packet}>
          <div>Pay ₹11/km after 80 km</div>
          <div>Pay ₹120/hrs after 8 hrs</div>
          <div>Night allowance</div>
          <div>Toll / State tax / Parking</div>
        </div>
      </div>
    </div>
  );
};

export default FareDetails;
