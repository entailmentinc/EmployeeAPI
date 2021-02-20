import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function BasicTable({ user }) {
  return (
            <TableRow key={user.name}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.birth}</TableCell>
              <TableCell align="right">{user.address}</TableCell>
            </TableRow>
  );
}
