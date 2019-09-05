import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from 'react-js-pagination';
import FilterMenu from './FIlterMenu';
import AccidentRow from './TableRow';
import './Table.scss';

const SimpleTable = ({
  markers, gettingId, dumpingAccident, filtering, user,
}) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (pageNumber) => {
    setValue(pageNumber);
  };

  return (
    <>
      <span className="accidents-title">
Accidents via @
        {user.name}
      </span>
      <div className="table-accidents">
        <FilterMenu filtering={filtering} />
        <Paper>
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">License plate</TableCell>
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {markers.map(el => (
                <AccidentRow
                  gettingId={gettingId}
                  dumpingAccident={dumpingAccident}
                  currentId={el[0]}
                  key={el[0]}
                  {...el[1]}
                  id={markers.indexOf(el) + 1}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
        <div className="pag-wrapper">
          <Pagination
            activePage={value}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default SimpleTable;

SimpleTable.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      license: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
  gettingId: PropTypes.func.isRequired,
  dumpingAccident: PropTypes.func.isRequired,
  filtering: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};