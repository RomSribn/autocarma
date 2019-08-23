import { database } from 'firebase';

export const refPostsDB = database().ref('posts/');

export const refUsersDB = user => database().ref(`users/${user}/`);

export const showLastItems = async () => {
  const connectDb = await database();
  const reference = await connectDb.ref();
  const limit = await reference.limitToLast(10);
  return limit;
};
