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
  const arrayLinks = [];
  await response.items.map(item => arrayLinks.push(item.getDownloadURL()));
  return arrayLinks;
};

// response.items.map(async (item) => {
//   const url = await item.getDownloadURL();
//   arrayLinks.push(url);
// });
// return arrayLinks;
// };
