import {LOGIN
    } from "../constant/types";
    export const AuthReducer = (state = false, action) => {
        switch (action.type) {
        case LOGIN:
            return true
        default:
            return state;
        }
    }