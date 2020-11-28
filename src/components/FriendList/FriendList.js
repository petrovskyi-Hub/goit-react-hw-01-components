import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from "./FriendList.module.css";

export default function FriendList ({friends}) {
    return (
        < ul className={s.friendList} >
            {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};