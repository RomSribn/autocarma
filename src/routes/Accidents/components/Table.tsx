import React from 'react';
import { ISimpleTableProps } from 'interfaces';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from 'react-js-pagination';
import FilterMenu from './FilterMenu';
import AccidentRow from './AccidentRow';
import './Table.scss';

const SimpleTable = ({
  markers,
  gettingId,
  dumpingAccident,
  filtering,
  user,
  isAdmin = false,
}: ISimpleTableProps) => {
  const [value, setValue] = React.useState(1);
  const totalItemsCount = markers.length;
  const itemsCountPerPage = 5;
  const end = value * itemsCountPerPage;
  const start = end - itemsCountPerPage;
  const pgArray = markers.slice(start, end);
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
        <Paper className="table-wrapper">
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
              {pgArray.map(el => (
                <AccidentRow
                  gettingId={gettingId}
                  dumpingAccident={dumpingAccident}
                  currentId={el[0]}
                  key={el[0]}
                  {...el[1]}
                  id={markers.indexOf(el) + 1}
                  isAdmin={isAdmin}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
        <div className="pag-wrapper">
          <Pagination
            activePage={value}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default SimpleTable;
