import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../actions/UserAction";

const User = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [form, setForm] = useState({ ...props.user });
    React.useEffect(() => {
        setForm({ ...props.user })
    }, [props.user])
    const onUpdateUser = (e) => {
        e.preventDefault();

    dispatch(updateUser({...form, isEdit: false}));

    };

    const onEditUser = (e) => {
        e.preventDefault();
        const update_user = {
            ...props.user,
            isEdit: true,
        }

    dispatch(updateUser(update_user));
        history.push("/")
    };

    return (        
        <tr>
            <td>{!form.isEdit ? <label 
                    style={{marginLeft:'35px',marginTop:'10px',padding:'5px 5px 5px 5px', width:'300px'}}
                >{form.name}</label> : <input 
                    value={form.name} 
                    type="text"
                    onChange={(e) => setForm((oldState) => ({
                        ...oldState,
                        name: e.target.value
                    }))}  
                    style={{marginLeft:'25px',marginTop:'10px',padding:'6px 6px 6px 6px', width:'300px'}}
                />}
            </td>

            <td>
            {!form.isEdit ? <label 
                    style={{marginLeft:'35px',marginTop:'10px',padding:'5px 5px 5px 5px', width:'300px'}}
                >{form.birth}</label>  : <input
                type="date"
                value={form.birth}
                onChange={(e) => setForm((oldState) => ({
                    ...oldState,
                    birth: e.target.value
                }))}  
                style={{marginLeft:'25px',marginTop:'10px',padding:'6px 6px 6px 6px', width:'300px'}}
            />}
            </td>

            <td>{!form.isEdit ? <label 
                    style={{marginLeft:'35px',marginTop:'10px',padding:'5px 5px 5px 5px', width:'300px'}}
                >{form.address}</label> : <input 
                    value={form.address} 
                    type="text"
                    onChange={(e) => setForm((oldState) => ({
                        ...oldState,
                        address: e.target.value
                    }))}  
                    style={{marginLeft:'25px',marginTop:'10px',padding:'6px 6px 6px 6px', width:'300px'}}
                />}
            </td>
        
            <td className="actions">
                {!form.isEdit ? <button onClick={onEditUser} style={{marginLeft:'35px',marginTop:'10px', padding:'5px 5px 5px 5px', width:'100px'}}>Edit</button> :
                <button onClick={onUpdateUser} style={{marginLeft:'35px',marginTop:'10px', padding:'5px 5px 5px 5px', width:'100px'}}>Save</button>}
                               
            </td>
        </tr>
    );
};

export default User;
