import * as React from 'react';
import { ThumbProps } from '../interface';
import './Thumb.scss';

const Thumb = ({ file, index, handleRemove }) => {
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
    <figure className="hover-img">
      <img
        onClick={() => {
          handleRemove(index);
        }}
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
      />
    </figure>
  );
};

export default Thumb;
