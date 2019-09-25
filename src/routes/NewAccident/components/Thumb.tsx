import * as React from 'react';
import { ThumbProps } from '../interface';

const Thumb = ({ file }) => {
  let loading;
  const [thumb, setThumb] = React.useState();

  const reader = new FileReader();

  React.useEffect(() => {
    reader.onload = () => {
      loading = false;
      setThumb(reader.result);
    };
    reader.readAsDataURL(file);
  }, [loading, thumb]);
  if (!file) {
    return null;
  }

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <img
      onClick={() => {
        console.log(thumb);
        debugger;
      }}
      src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
    />
  );
};

export default Thumb;
