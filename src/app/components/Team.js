// components/Team.js
import styles from '../styles/Team.module.css';

const TeamMember = ({ name, title, imgSrc, social }) => {
  return (
    <div className={styles.teamMember}>
      <div className={styles.entryHover}>
        <h3>{name}</h3>
        <div className={styles.elPos}>{title}</div>
        <div className={styles.distSocial}>
          <ul>
            {social.map((item, index) => (
              <li key={index}>
                <a href={item.link}><i className={`fa fa-${item.platform}`}></i></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={imgSrc} alt={`${name} image`} className={styles.teamImage} />
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Sean Gares',
      title: 'CO-FOUNDER',
      imgSrc: 'http://demo.themeton.com/cooper/wp-content/uploads/sites/68/2016/07/member3.jpg',
      social: [
        { platform: 'facebook', link: '#' },
        { platform: 'twitter', link: '#' },
        { platform: 'linkedin', link: '#' }
      ]
    },
    {
      name: 'Eduardo Gares',
      title: 'Director',
      imgSrc: 'http://demo.themeton.com/cooper/wp-content/uploads/sites/68/2016/07/member1.jpg',
      social: [
        { platform: 'facebook', link: '#' },
        { platform: 'twitter', link: '#' },
        { platform: 'linkedin', link: '#' }
      ]
    },
    {
      name: 'Sean Banderas',
      title: 'Consultant',
      imgSrc: 'http://demo.themeton.com/cooper/wp-content/uploads/sites/68/2016/07/member2.jpg',
      social: [
        { platform: 'twitter', link: '#' },
        { platform: 'linkedin', link: '#' },
        { platform: 'instagram', link: '#' }
      ]
    }
  ];

  return (
    <div className={styles.teamSection}>
      <div className={styles.header}>
        <h2>OUR TEAM</h2>
        <p>Under the right circumstances, a team can be significantly more creative than any individual</p>
        <div className={styles.decorativeLine}></div>
      </div>
      <div className={styles.gallery}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
