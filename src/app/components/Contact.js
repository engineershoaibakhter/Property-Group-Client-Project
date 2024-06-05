


import styles from '../styles/Contact.module.css';
import FormExample from './FormExample'; // Import the Bootstrap form component

const Contact = () => {
  return (
    <>
        <h1 className={styles.heading}>Contact US</h1>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.leftContent} ${styles.leftSide}`}>
          {/* Add your left content here */}
          <div className={`${styles.details} ${styles.address}`}>
            <i className="fas fa-map-marker-alt"></i>
            <div className={styles.topic}>Address</div>
            <div className={styles.textOne}>Level 8/468 St Kilda Road</div>
            <div className={styles.textTwo}>Melbourne VIC 3004</div>
          </div>
          <div className={`${styles.details} ${styles.phone}`}>
            <i className="fas fa-phone-alt"></i>
            <div className={styles.topic}>Phone</div>
            <div className={styles.textOne}>03 9222 4000</div>
          </div>
          <div className={`${styles.details} ${styles.email}`}>
            <i className="fas fa-envelope"></i>
            <div className={styles.topic}>Email</div>
            <div className={styles.textOne}>codinglab@gmail.com</div>
          </div>
        </div>
        <div className={`${styles.rightContent} ${styles.rightSide}`}>
          <FormExample />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
