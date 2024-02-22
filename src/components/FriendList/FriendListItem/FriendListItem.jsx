import css from './FriendListItem.module.css';
import clsx from "clsx";


const FriendListItem = ({avatar, name, isOnline }) => {
  return (
    <div>
        <img className={css.FriendListItemPhoto} src={avatar} alt="Avatar" width="96" />
        <p className={css.FriendListItemName}>{name}</p>
        <p className={clsx(css['FriendListItemStatus'], {
            [css.online]: isOnline,
            [css.offline]: !isOnline
            })}>
            {isOnline ? "Online" : "Offline"}
        </p>
    </div>

  )
}




export default FriendListItem;