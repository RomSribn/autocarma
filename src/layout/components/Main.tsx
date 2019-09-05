import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => <div className="main">{children}</div>;

export default Main;
