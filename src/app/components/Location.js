import styles from '../styles/Location.module.css';

const Contact = () => {
  return (
    <div className={styles.location}>
        <h1 className={styles.heading}>Our Location</h1>
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
            <div className={styles.textOne}>michael.ellis@bcacorp.com.au</div>
          </div>
        </div>
        <div className={`${styles.rightContent} ${styles.rightSide}`}>
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12603.295360381187!2d144.9766528!3d-37.8410097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff44c17fc4653b83!2sPSP%20Property%20Group!5e0!3m2!1sen!2sau!4v1666158748109!5m2!1sen!2sau"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
