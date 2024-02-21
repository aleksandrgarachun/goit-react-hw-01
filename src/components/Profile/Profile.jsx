//import React from 'react'
import css from './Profile.module.css'


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileSection}>
      <div className={css.profileInfo}>
        <img 
        src={image}
        alt="User avatar"
        className={css.profileImage} 
        />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStatus}>
        <li className={css.profileStatusInfo}>
          <span className={css.follVieLikes}>Followers</span>
          <span className={css.numbersInfo}>{stats.followers}</span>
        </li>
        <li className={css.profileStatusInfo}>
          <span className={css.follVieLikes}>Views</span>
          <span className={css.numbersInfo}>{stats.views}</span>
        </li>
        <li className={css.profileStatusInfo}>
          <span className={css.follVieLikes}>Likes</span>
          <span className={css.numbersInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;