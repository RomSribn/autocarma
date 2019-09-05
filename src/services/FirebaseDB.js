import { database, initializeApp } from 'firebase';
import { firebaseConfig } from 'config';

<<<<<<< HEAD
initializeApp(firebaseConfig);
=======
>>>>>>> develop
export const refPostsDB = database().ref('posts/');

export const refUsersDB = (user, post) => database()
  .ref('users/')
  .child(`${user}/`)
  .child(`${post}/`);

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
