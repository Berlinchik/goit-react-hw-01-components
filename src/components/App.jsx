import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics"
import FriendList from './FriendList/FriendList'
import userObj from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'

export const App = () => {

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#42798d39',
        padding: "30px 0"
      }}
    >
      <Profile user={userObj} />
      <Statistics title="Upload stats" stats={data} colors={colors} />
      <FriendList friends = {friends} />
    </div>
  );
};

function rundomColor() {
    return '#' + (Math.floor(Math.random()*16777215).toString(16));
}

const colors = [1, 2, 3, 4, 5].map(color => rundomColor())

