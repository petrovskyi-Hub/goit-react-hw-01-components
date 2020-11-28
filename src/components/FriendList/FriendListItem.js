import PropTypes from 'prop-types';
import s from "./FriendListItem.module.css";

export default function FriendListItem ({avatar, name, isOnline}) {
    return (
        <li
            className={s.item}
        >
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt="Аватар" width="70"/>
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
