import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
        <h1 className={styles.heading}>About US</h1>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.leftContent}`}>
        <img src='/images/buildingImage.png' alt='building image' width="100%" height="400"  />

          
        </div>
        <div className={`${styles.rightContent}`}>


   <p className={styles.paragraph}>BCA-Corp is one of Australia’s leading Development and Project Management companies with a 54 year track record for identifying and delivering profitable developments for our loyal Clients. Our core values of trust, transparency, loyalty, teamwork and integrity, coupled with our disciplined approach to Project Management, results in profitable projects delivered on time, on budget and to a level of quality all parties can be proud of.</p>


        </div>
      </div>
    </div>
    </div>
  );
};

export default About;

