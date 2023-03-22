import './FriendListItem.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log(name);
    return <li className="friends-item">
        <span className="status">{isOnline}</span>
  <img className="friends-avatar" src={avatar} alt="User avatar" />
        <p className='name'>{name}</p>
</li>
}
export default FriendListItem;