//import React from 'react'
import css from './Profile.module.css'


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css['profile-section']}>
      <div className={css['profile-info']}>
        <img 
        src={image}
        alt="User avatar"
        className={css['profile-image']} 
        />
        <p className={css['profile-name']}>{name}</p>
        <p className={css['profile-tag']}>@{tag}</p>
        <p className={css['profile-location']}>{location}</p>
      </div>

      <ul className={css['profile-status']}>
        <li className={css['profile-status-info']}>
          <span className={css['foll-vie-likes']}>Followers</span>
          <span className={css['numbers-info']}>{stats.followers}</span>
        </li>
        <li className={css['profile-status-info']}>
          <span className={css['foll-vie-likes']}>Views</span>
          <span className={css['numbers-info']}>{stats.views}</span>
        </li>
        <li className={css['profile-status-info']}>
          <span className={css['foll-vie-likes']}>Likes</span>
          <span className={css['numbers-info']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;