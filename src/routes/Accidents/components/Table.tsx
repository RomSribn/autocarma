import React from 'react';
import { ISimpleTableProps } from 'interfaces';
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
  markers,
  gettingId,
  dumpingAccident,
  filtering,
  user,
}: ISimpleTableProps) => {
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
            totalItemsCount={markers.length}
            pageRangeDisplayed={5}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default SimpleTable;
