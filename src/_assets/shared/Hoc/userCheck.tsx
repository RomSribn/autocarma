import React from 'react';
import Loader from '_assets/shared/Loader/Loader';

export const userCheck = (Component, user) => (!user ? <Component /> : <Loader />);
export const unUserCheck = (Component, user) => (user ? <Component /> : <Loader />);
