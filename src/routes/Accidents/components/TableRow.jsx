import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Clear from '@material-ui/icons/Clear';
import Eye from '@material-ui/icons/RemoveRedEye';
import history from 'utils/history';
import './TableRow.scss';

const AccidentRow = ({
  id, type, license, time, currentId, gettingId,
}) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {id}
    </TableCell>
    <TableCell align="left">{type}</TableCell>
    <TableCell align="left">{license}</TableCell>
    <TableCell align="left">{time}</TableCell>
    <TableCell align="left">0</TableCell>
    <TableCell align="center">
      <Eye
        fontSize="large"
        color="disabled"
        onClick={() => {
          gettingId(currentId);
          history.push('/viewpage');
        }}
      />
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
  currentId: PropTypes.string.isRequired,
  gettingId: PropTypes.func.isRequired,
};
