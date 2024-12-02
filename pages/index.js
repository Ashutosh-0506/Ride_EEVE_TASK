import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import FareDetails from '../components/FareDetails/FareDetails';
import FormTemplate from '../components/Forms/FormTemplate';
import styles from '../styles/Home.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <Navbar />

      <div className={styles.main}>
        {/* Sidebar */}
        <Sidebar />

        {/* Content Section */}
        <div className={styles.content}>
          {/* Form Template Component */}
          <FormTemplate />
        </div>

        {/* Fare Details */}
        <FareDetails />
      </div>
    </div>
  );
}
