import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Clear from '@material-ui/icons/Clear';
import Eye from '@material-ui/icons/RemoveRedEye';
import './TableRow.scss';

const AccidentRow = ({
  id, type, license, time, rating, uid,
}) => (
  <TableRow className={uid}>
    <TableCell component="th" scope="row">
      {id}
    </TableCell>
    <TableCell align="left">{type}</TableCell>
    <TableCell align="left">{license}</TableCell>
    <TableCell align="left">{time}</TableCell>
    <TableCell align="left">{rating}</TableCell>
    <TableCell align="center">
      <Eye fontSize="large" color="disabled" />
      <Clear className="clear-icon" fontSize="large" color="disabled" />
    </TableCell>
  </TableRow>
);

export default AccidentRow;

AccidentRow.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
};
