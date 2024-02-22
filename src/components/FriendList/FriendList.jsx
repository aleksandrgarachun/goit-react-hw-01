import css from './FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem.jsx';




const FriendList = ({friends}) => {
  return (
    <ul className={css.FriendListSec}>
      {friends.map(({id, avatar, name, isOnline}) => (
        <li key={id} className={css.FriendListfriend}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};



export default FriendList