import { storage } from 'firebase';

const referenc = storage().ref();

export const refStorage = (folder, file) => {
  const refAccident = referenc.child(`${folder}/${file.name}`);
  refAccident.put(file);
};

export const getAccidentImages = async (id) => {
  const reference = await storage().ref();
  const postFolder = await reference.child(`${id}/`);
  const response = await postFolder.listAll();

  return Promise.all(response.items.map(item => item.getDownloadURL()));
};
