import React from 'react';
import Loader from '_assets/shared/Loader/Loader';
// const userCheck = (component, user, isUser) => {
//   if (isUser) {
//     return user ? component : <div />;
//   }
//   return user ? <div /> : component;
// };

export const userCheck = (Component, user) => (!user ? <Component /> : <Loader />);
export const unUserCheck = (Component, user) => (user ? <Component /> : <Loader />);
