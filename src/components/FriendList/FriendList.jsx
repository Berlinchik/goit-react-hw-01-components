import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types';
import css from './FriendList.module.scss'

const FriendList = ({ friends }) => {
    return <ul className={css.list}>
        {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />)}
</ul>
}

export default FriendList;
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired,),
}