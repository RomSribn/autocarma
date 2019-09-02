import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Clear from '@material-ui/icons/Clear';
import Eye from '@material-ui/icons/RemoveRedEye';
import history from 'utils/history';
import './TableRow.scss';

interface MarkersProps {
  id: number;
  type: string;
  license: string;
  time: string;
  rating: number;
  currentId: string;
  gettingId: (id: string) => void;
  dumpingAccident: (currentId: string) => void;
}

const AccidentRow = ({
  id,
  type,
  license,
  time,
  currentId,
  gettingId,
  dumpingAccident,
}: MarkersProps) => {
  const onEyeClick = () => {
    gettingId(currentId);
    history.push('/viewpage');
  };

  const onCrossClick = () => {
    dumpingAccident(currentId);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="left">{type}</TableCell>
      <TableCell align="left">{license}</TableCell>
      <TableCell align="left">{time}</TableCell>
      <TableCell align="left">0</TableCell>
      <TableCell align="center">
        <Eye fontSize="large" color="disabled" onClick={onEyeClick} />
        <Clear className="clear-icon" fontSize="large" color="disabled" onClick={onCrossClick} />
      </TableCell>
    </TableRow>
  );
};

export default AccidentRow;
