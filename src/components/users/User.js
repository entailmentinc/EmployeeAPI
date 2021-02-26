import React from 'react';
import moment from 'moment'

export default function BasicTable({ user }) {
  return (
    <tr class="active-user">
        <td>{user.empId}</td>
        <td><img style={{width: "60px", height: "60px", borderRadius: "50%"}} className=" lazyloaded" alt={user.name} src={user.picture} /></td>
        <td>{`${user.firstName} ${user.lastName}`}</td>
        <td>{user.isActive ? 'Active' : 'InActive'}</td>
        <td id="tddob3">{user.dob ? moment(user.dob).format('YYYY-MM-DD') : 'NA'}</td>
        <td id="tddoj3">{user.doj ? moment(user.doj).format('YYYY-MM-DD') : 'NA'}</td>
        <td><a href={`#/${user.empId}`}>Edit</a></td>
    </tr>
  );
}
