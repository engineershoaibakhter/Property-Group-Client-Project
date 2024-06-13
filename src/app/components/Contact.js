import styles from '../styles/Contact.module.css';
import FormExample from './FormExample'; // Import the Bootstrap form component

const Contact = () => {
  return (
    <div className={styles.contact}>
        <h1 className={styles.heading}>Contact US</h1>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.leftContent} ${styles.leftSide}`}>
          <img src='/images/contact-image.jpg' alt='contact-image' width="70%" height="70%"/>
         
        </div>
        <div className={`${styles.rightContent} ${styles.rightSide}`}>
          <FormExample />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
