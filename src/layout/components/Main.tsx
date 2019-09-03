import React from 'react';
import './Main.scss';
import { MainProps } from 'types/index';

const Main = ({ children }: MainProps) => <div className="main">{children}</div>;

export default Main;
