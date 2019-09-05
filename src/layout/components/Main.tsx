import React from 'react';
import './Main.scss';
import { IMainProps } from '../interface';

const Main = ({ children }: IMainProps) => <div className="main">{children}</div>;

export default Main;
