import * as React from 'react';
import { ThumbProps } from '../interface';
import './Thumb.scss';

const Thumb = ({ file, index, handleRemove }: ThumbProps) => {
  const [loading, setLoading] = React.useState(true);
  const [thumb, setThumb] = React.useState();

  const reader = new FileReader();

  React.useEffect(() => {
    reader.onload = () => {
      setThumb(reader.result);
    };
    reader.readAsDataURL(file);
    setLoading(false);
  }, [file, handleRemove, loading, reader]);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <figure className="hover-img-thumb">
      <img
        onClick={() => {
          handleRemove(index);
        }}
        src={thumb}
        alt={file.name}
        className="hover-img"
        height={200}
      />
    </figure>
  );
};

export default Thumb;
