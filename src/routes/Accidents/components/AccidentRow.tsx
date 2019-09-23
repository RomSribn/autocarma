import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Clear from '@material-ui/icons/Clear';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import history from 'utils/history';
import { IAccidentRowProps } from '../interface';
import './AccidentRow.scss';

const AccidentRow = ({
  id,
  type,
  license,
  time,
  currentId,
  gettingId,
  dumpingAccident,
}: IAccidentRowProps) => {
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
        <RemoveRedEye fontSize="large" color="disabled" onClick={onEyeClick} />
        <Clear className="clear-icon" fontSize="large" color="disabled" onClick={onCrossClick} />
      </TableCell>
    </TableRow>
  );
};

export default AccidentRow;
