// "use client"
// import styles from '../styles/About.module.css';

// const Contact = () => {
//   return (
//     <div className={styles.contact}>
//         <h1 className={styles.heading}>About US</h1>
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={`${styles.leftContent} ${styles.leftSide}`}>
//         <img src='/images/building.jpg' alt='building image'  />

//         </div>
//         <div className={`${styles.rightContent} ${styles.rightSide}`}>
//          <p className={styles.paragraph}>Pomeroy Pacific is one of Australia’s leading Development and Project Management companies with a 54 year track record for identifying and delivering profitable developments for our loyal Clients. Our core values of trust, transparency, loyalty, teamwork and integrity, coupled with our disciplined approach to Project Management, results in profitable projects delivered on time, on budget and to a level of quality all parties can be proud of.</p>

//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Contact;



import styles from '../styles/About.module.css';

const Contact = () => {
  return (
    <div className={styles.about}>
        <h1 className={styles.heading}>About US</h1>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.leftContent}`}>
          {/* Add your left content here */}
        <img src='/images/building.jpg' alt='building image' width="100%" height="400"  />

          
        </div>
        <div className={`${styles.rightContent}`}>


   <p className={styles.paragraph}>Pomeroy Pacific is one of Australia’s leading Development and Project Management companies with a 54 year track record for identifying and delivering profitable developments for our loyal Clients. Our core values of trust, transparency, loyalty, teamwork and integrity, coupled with our disciplined approach to Project Management, results in profitable projects delivered on time, on budget and to a level of quality all parties can be proud of.</p>


        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

