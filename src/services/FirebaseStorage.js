import { storage } from 'firebase';
import { array } from 'prop-types';

const reference = storage().ref();

export const refStorage = (folder, file) => {
  const refAccident = reference.child(`${folder}/${file.name}`);
  refAccident.put(file);
};

export const getAccidentImages = id => reference
  .child(id)
  .listAll()
  .then((response) => {
    const arrayLinks = [];
    response.items.map(async (item) => {
      const url = await item.getDownloadURL();
      arrayLinks.push(url);
    });
    return arrayLinks;
  });
