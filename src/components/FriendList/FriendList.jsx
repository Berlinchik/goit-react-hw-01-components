import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types';
import './FriendList.css'

const FriendList = ({ friends }) => {
    return <ul className='friend-list'>
        {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />)}
</ul>
}

export default FriendList;
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired,),
}