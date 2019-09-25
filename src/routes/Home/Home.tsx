import React from 'react';
import './Home.scss';

const Home = ({ toggleLoader }) => {
  React.useEffect(() => {
    toggleLoader(false);
  }, [toggleLoader]);
  return (
    <div className="main-content">
      <div className="item button-hand">
        <button>
          Login for start!
          <div className="hands" />
        </button>
      </div>
    </div>
  );
};

export default Home;
