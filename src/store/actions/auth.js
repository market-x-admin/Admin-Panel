import * as authTypes from "./actionTypes"

export const loginSuccess = (token, user) => {
    return {
        type: authTypes.loginSuccess,
        token: token,
        user: user,
        
    };
};
export const getUser = (user, role) => {
    return {
        type: authTypes.getUserSuccess,
        user: user,
        role: role
    };
};