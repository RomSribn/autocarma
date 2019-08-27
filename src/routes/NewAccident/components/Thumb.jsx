import React from 'react';
import PropTypes from 'prop-types';

const Thumb = ({ file }) => {
  const [loading, setLoading] = React.useState(false);

  const [thumb, setThumb] = React.useState(undefined);

  const reader = new FileReader();

  reader.onloadend = () => {
    setLoading(false);
    setThumb(reader.result);
  };
  if (!file) {
    return null;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return <img src={thumb} alt={file.name} className="img-thumbnail mt-2" height={200} />;
};

export default Thumb;

Thumb.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
