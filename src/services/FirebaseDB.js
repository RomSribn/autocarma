import { database } from 'firebase';

export const ref = database().ref();

export const showLastItems = async () => {
  const connectDb = await database();
  const reference = await connectDb.ref();
  return reference;
};
