import React from 'react';
import { ThumbProps } from '../interface';

const Thumb = ({ file }: ThumbProps) => {
  let loading;
  let thumb;

  const reader = new FileReader();

  React.useEffect(
    (reader.onloadend = () => {
      loading = false;
      thumb = reader.result;
    }),
    [loading, thumb],
  );
  if (!file) {
    return null;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return <img src={thumb} alt={file.name} className="img-thumbnail mt-2" height={200} />;
};

export default Thumb;
