import axios from 'axios'
import { ROOT_URL } from '.'
import setAuthorizationToken from '../helpers/util/setAuthorizationToken'
import jwt from 'jsonwebtoken'
import { SET_CURRENT_USER } from './ActionTypes'

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export function login(data) {
    let sendData = {
        username: data.username,
        passwordNoEncrypted: data.password
    }
    return dispatch => {
        return axios.post(`${ROOT_URL}/loginToApp`, sendData)
            .then(res => {
                const token = res.data.obj.token
                localStorage.setItem('jwtToken', token)
                setAuthorizationToken(token)
                console.log(jwt.decode(token))
                dispatch(setCurrentUser(jwt.decode(token)))
            })
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken')
        setAuthorizationToken(false)
        dispatch(setCurrentUser({}))
    }
}