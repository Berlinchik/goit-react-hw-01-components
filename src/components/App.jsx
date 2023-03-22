import Profile from "./Profile/Profile";
import userObj from '../data/user.json'
import PropTypes from 'prop-types'


export const App = () => {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#42798d39'
      }}
    >
      <Profile user={userObj} />
      {/* <Statistics></Statistics> */}
    </div>
  );
};
