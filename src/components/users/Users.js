import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { selectUsers } from './../../helpers/selector'

const Users = ({ users }) => {
    return (
        <div>
            <table className="table" style={{marginLeft:'60px',marginTop:'30px',marginBottom:'20px'}}>
                <thead>
                    <tr>  
                        <th>Name</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                        <th>Save</th>
                    </tr>
                </thead>
                
                <tbody>
                        {users.map((user) => (
                            <User user={user} key={user.id} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: selectUsers(state),
  })

export default connect(mapStateToProps, {
  })(Users)
