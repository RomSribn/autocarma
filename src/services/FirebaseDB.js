import { database } from 'firebase';

export const refPostsDB = database().ref('posts/');

export const refUsersDB = user => database().ref(`users/${user}/`);

export const showLastItems = async () => {
  const connectDb = await database();
  const reference = await connectDb.ref('posts/');
  const limit = await reference.limitToLast(10);
  return limit;
};

export const showUsers = async () => {
  const connectDb = await database();
  const reference = await connectDb.ref('users/');
  const users = await reference.listAll;
  return users;
};
