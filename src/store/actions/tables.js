
import * as actionTypes from './actionTypes'
import axios from '../../axios';


export const getTables = (token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    const res = await axios.get('api/get/tables', null , config);
    var superAdminTables = ['categories' , 'customers' , 'order_detail' , 'orders' ,'product_stores' , 'products' , 'stores' , 'users']
    var adminTables = ['categories' , 'customers' , 'products' , 'stores' , 'users']
    if(token === 'SuperAdmin'){
        dispatch({
            type: actionTypes.getTables,
            payload: superAdminTables
        });
        return superAdminTables
    }
    if(token === 'Admin'){
        dispatch({
            type: actionTypes.getTables,
            payload: adminTables
        });
        return adminTables
    }
};