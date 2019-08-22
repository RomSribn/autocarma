import { database } from 'firebase';

export const ref = database().ref();

export const showLastItems = async () => {
  const connectDb = await database();
  const reference = await connectDb.ref();
  const limit = await reference.limitToLast(10);
  return limit;
};
