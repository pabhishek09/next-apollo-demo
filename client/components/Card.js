import { AvatarGenerator } from 'random-avatar-generator';
import styles from './card.module.css';
 
const generator = new AvatarGenerator();
 
export default ({person}) => {

  const avatar = generator.generateRandomAvatar();

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src='https://cdn-icons-png.flaticon.com/512/145/145849.png' alt={person.name}/>
      </div>
      <div className="name">
        {person.name}
      </div>
      <div className="address">
        {person.address}
      </div>
      <div className="contact">
        <span className="email">
          {person.email}
        </span>
        <span className="phone">
          {person.phone}
        </span> 
        </div>
    </div>
  );
};
