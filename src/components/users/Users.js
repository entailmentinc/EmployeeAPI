import React from 'react';
import { connect } from "react-redux";
import isEmpty from 'lodash/isEmpty'
import User from "./User";
import { selectUsers } from './../../helpers/selector'

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function Users({ users }) {
	const [filteredUsers, setFilteredUsers] = React.useState([])
	const activeUsers = users.filter((item) => item.isActive)
	const inactiveUsers = users.filter((item) => !item.isActive)
	const [searchValue, setSearchValue] = React.useState('')
	const [filterValue, setFilterValue] = React.useState('all')
	const onSearch = function () {
		if (isEmpty(searchValue)) {
			setFilteredUsers(users)
			return
		}
		setFilteredUsers(users.filter((user) => (user.firstName || '').toLowerCase().includes(searchValue.toLocaleLowerCase()) || (user.lastName || '').toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))
	}
	const onFilter = (event) => {
		const value = event.target.value
		if (value === '0') {
			setFilteredUsers(users)
		} else {
			setFilteredUsers(users.filter((item) => {
				return item.isActive.toString() === value
			}))
		}
		setFilterValue(value)
	}
	React.useEffect(() => {
		if (!isEmpty(users)) {
			setFilteredUsers(users)
		}
	}, [users])
  return (
  <>
    <div className="d-flex justify-content-between align-items-center">
			<h1>Employee Directory</h1>
			<div className="d-flex heading-right align-items-center">
			  <div>
					<b>Total Records: ({users.length})</b>
					</div>
					<div className="active-user">
					<b>Active : ({activeUsers.length})</b>
					</div>
					<div className="unactive-user">
					<b>InActive : ({inactiveUsers.length})</b>
					</div>                    
			</div>
		</div>
		<form className="example search-form">
			<div className="d-flex">
			  <input
					value={searchValue}
					onChange={(event) => {
						setSearchValue(event.target.value)
					}}
					type="text"
					placeholder="Search by name"
					name="searchtext"
				/>
			  <button onClick={onSearch} type="button"><i className="fa fa-search"></i></button>
			</div>
			<div className="d-flex filter-section align-items-center">
				<label for="isActiveFilter">Filter by isActive: </label>
				<div className="box">
				  <select value={filterValue} onChange={onFilter} id="selectboxisactive">
						<option value="0">All</option>
						<option value="true">true</option>
						<option value="false">false</option>
				  </select>
				</div>
			</div>
		</form>
		<table align="center" width="100%" className="data-table" cellpadding="0" cellspacing="0">
			<tbody>
				<tr className="table-head">
					<th>ID</th>
					<th>Image</th>
					<th>Name</th>
					<th>Status</th>
					<th>Date Of Birth</th>
					<th>Date Of Joining</th>
					<th>Edit</th>
         </tr>
				 {filteredUsers.map((user) => (
						<User user={user} key={user.empId} />
        ))}
			</tbody>
		</table>
	</>
  );
}

const mapStateToProps = (state) => ({
  users: selectUsers(state),
})

export default connect(mapStateToProps, {
})(Users)
