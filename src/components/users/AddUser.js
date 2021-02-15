import React, { useState } from "react";
import { addUser } from "../../actions/UserAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const AddUser = ({ addUser }) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [birth, setBirth] = useState("");

    const craeteUser = (e) => {
        e.preventDefault();
            const new_user = {
                name: name,
                birth: birth,
                address: address,
            };
        addUser(new_user);
        history.push("/users");
    };

    return (
            <div>
                <div>
                    <form onSubmit={(e) => craeteUser(e)}>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{marginTop:'20px',paddingTop:'5px', paddingBottom:'5px', width:'240px'}}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="date"
                                placeholder="Enter Your Date of Birth"
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)}
                                style={{marginTop:'10px',paddingTop:'5px', paddingBottom:'5px', width:'240px'}}
                                required
                            />
                        </div>

                        <div>
                            <input
                            type="text"
                            placeholder="Enter Your Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            style={{marginTop:'10px',paddingTop:'5px', paddingBottom:'5px', width:'240px'}}
                            required
                            />
                        </div>
                    
                        <button type="submit" style={{marginTop:'10px',paddingTop:'5px', paddingBottom:'5px', width:'240px'}}>
                            Add User
                        </button>
                    </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
  })

export default connect(mapStateToProps, {
    addUser
  })(AddUser)
