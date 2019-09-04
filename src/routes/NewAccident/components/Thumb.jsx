import React from 'react';
import PropTypes from 'prop-types';

const Thumb = ({ file }) => {
<<<<<<< HEAD
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
=======
  const [loading, setLoading] = React.useState(false);

  const [thumb, setThumb] = React.useState(undefined);

  const reader = new FileReader();

  reader.onloadend = () => {
    setLoading(false);
    setThumb(reader.result);
  };
>>>>>>> 56692bb4876071864cb36fb4ef631cf08248c37b
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
