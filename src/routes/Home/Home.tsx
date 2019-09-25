import React from 'react';
import history from 'utils/history';
import { login } from 'routes/variables';
import './Home.scss';

const Home = ({ toggleLoader }) => {
  React.useEffect(() => {
    toggleLoader(false);
  }, [toggleLoader]);
  return (
    <div className="main-content">
      <div className="item button-hand">
        <button className="home-button" onClick={() => history.push(login)}>
          Login for start!
          <div className="hands" />
        </button>
      </div>
    </div>
  );
};

export default Home;
