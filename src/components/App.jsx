import PropTypes from 'prop-types'
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics"
import userObj from '../data/user.json'
import data from '../data/data.json'

export const App = () => {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#42798d39'
      }}
    >
      <Profile user={userObj} />
      <Statistics title="Upload stats" stats={data} colors={colors} />
    </div>
  );
};

function rundomColor() {
    return '#' + (Math.floor(Math.random()*16777215).toString(16));
}

const colors = [1, 2, 3, 4, 5].map(color => rundomColor())

