import {
    CREATE_USER,
    UPDATE_USER,
    } from "../constant/types";
    
    export const UserReducer = (state = {}, action) => {
        switch (action.type) {
        case CREATE_USER:
            return {
            ...state,
            users: [action.payload, ...state.users],
            };
            
        case UPDATE_USER:
            return {
            ...state,
            users: state.users.map((user) =>
                // eslint-disable-next-line eqeqeq
                user.id == action.payload.id ? action.payload : user
            ),
            };
        default:
            return state;
        }
    }