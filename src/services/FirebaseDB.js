import { database } from 'firebase';

export const refPostsDB = database().ref('posts/');

export const refUsersDB = user => database().ref(`users/${user}/`);

export const showLastItems = async () => {
  const connectDb = await database();
  const reference = await connectDb.ref('posts/');
  return reference.limitToLast(10);
};

export const showUserPost = async (user) => {
  const connectDb = await database();
  return connectDb.ref(`users/${user}`);
};

export const deletePost = async (id) => {
  const connectDb = await database();
  const reference = await connectDb.ref(`posts/${id}`);
  return reference.remove();
};
