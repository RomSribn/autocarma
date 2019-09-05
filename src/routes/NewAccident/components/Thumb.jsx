import React from 'react';
import PropTypes from 'prop-types';

const Thumb = ({ file }) => {
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

Thumb.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
