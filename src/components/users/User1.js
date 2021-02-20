import React from 'react';
import moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function BasicTable({ user }) {
  return (
      <TableRow key={user.name}>
        <TableCell component="th" scope="row">
          {user.empId}
        </TableCell>
        <TableCell component="th" scope="row">
          <Avatar
            src={user.picture}
          />
        </TableCell>
        <TableCell component="th" scope="row">{`${user.firstName} ${user.lastName}`}</TableCell>
        <TableCell component="th" scope="row">
          {user.isActive ? 'Active' : 'InActive'}
        </TableCell>
        <TableCell align="right">{user.dob ? moment(user.dob).format('YYYY-MM-DD') : 'NA'}</TableCell>
        <TableCell align="right">{user.doj ? moment(user.doj).format('YYYY-MM-DD') : 'NA'}</TableCell>
      </TableRow>
  );
}
