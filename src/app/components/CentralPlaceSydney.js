import React from 'react'
import styles from "../styles/CentralPlaceSydney.module.css";

const CentralPlaceSydney = () => {
  return (
    <div className={styles.centralPlaceSydney}>
        <div className={styles.heading}>
            <h1>Central Place Sydney</h1>
        </div>
        <div className={styles.paragraph}>
            <p>Central Place Sydney is a joint venture between two of Australia’s leading property groups, Frasers Property Australia and Dexus, and will be Sydney’s most significant CBD development in over a decade.</p>
            <p>Central Place Sydney will be at the heart of the NSW Government-backed Tech Central innovation district and will define the future of work and workplaces, as well as set the precedent for healthy building technology. The development will position Tech Central as a key driver of innovation and growth in the Asia Pacific region and significantly contribute to large-scale urban change in Sydney.</p>
            <p>When completed, Central Place Sydney will become a vibrant gateway to the southern end of Sydney CBD. With a diverse retail and dining offering, public art and green spaces, improved pedestrian amenity and connectivity to Central Station, Central Place Sydney will be an exciting destination for the people of Sydney to enjoy.</p>
        </div>
    </div>
  )
}

export default CentralPlaceSydney