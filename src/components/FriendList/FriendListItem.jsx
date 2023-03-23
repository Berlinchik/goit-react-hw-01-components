import PropTypes from 'prop-types';
import css from './FriendListItem.module.scss'
import { clsx } from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className={css.item}>
        <span className={clsx(css.status, isOnline && css.isOnline)}></span>
  <img className={ css.avatar} src={avatar} alt="User avatar" />
        <p className={css.name}>{name}</p>
</li>
}
export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}