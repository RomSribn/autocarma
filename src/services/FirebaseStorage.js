import { storage } from 'firebase';

const referenc = storage().ref();

export const refStorage = (folder, file) => {
  const refAccident = referenc.child(`${folder}/${file.name}`);
  refAccident.put(file);
};

export const getAccidentImages = async () => {
  const reference = await storage().ref();
  const postFolder = await reference.child('-LmybV1VeDUL057dxl-6/');
  const response = await postFolder.listAll();
  const arrayLinks = [];
  response.items.map(async (item) => {
    const url = await item.getDownloadURL();
    arrayLinks.push(url);
  });
  return arrayLinks;
};

// reference
//   .child(id)
//   .listAll()
//   .then((response) => {
//     const arrayLinks = [];
//     response.items.map(async (item) => {
//       const url = await item.getDownloadURL();
//       arrayLinks.push(url);
//     });
//     return arrayLinks;
//   });
