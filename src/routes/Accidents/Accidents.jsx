import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AccidentRow from './components/TableRow';

import './Accidents.scss';


const SimpleTable = ({ data }) => (
  <Paper className="table-accidents">
    <Table className="table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Type</TableCell>
          <TableCell align="left">License plate</TableCell>
          <TableCell align="left">Time</TableCell>
          <TableCell align="left">Rating</TableCell>
          <TableCell align="left">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
              data.map(accident => (<AccidentRow {...accident} />))
            }
      </TableBody>
    </Table>
  </Paper>
);

export default SimpleTable;

SimpleTable.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    license: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
