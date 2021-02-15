import {LOGIN
    } from "../constant/types";
import localStorageService from './../localStorageService'

export const login = (authDetail, success, failure) => (dispatch) => {
    if (authDetail.email === 'admin@gmail.com' && authDetail.password === 'password') {
        dispatch({
            type: LOGIN,
            data: true
        })
        localStorageService.setToken(true)
    } else {
        failure()
    }
}

export const setAuth = () => (dispatch) => {
    if (localStorageService.getAccessToken()) {
        dispatch({
            type: LOGIN,
            data: true
        })
    }
}

export const logout = () => {
    localStorageService.clearToken()
    window.location = '/login'
}