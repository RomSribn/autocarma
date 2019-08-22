import { storage } from 'firebase';

const reference = storage().ref();

export const refStorage = (folder, file) => {
  const refAccident = reference.child(`${folder}/${file.name}`);
  refAccident.put(file);
};

export const getAccidentImages = 1;
