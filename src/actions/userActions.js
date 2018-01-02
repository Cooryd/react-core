import * as types from '../constants/actionTypeConstants';

export function fetchUserDetails(){
    return (dispatch) => {
        //simulate ajax call.
        setTimeout(() => {dispatch({
            type: types.USER_DETAILS_FETCHED,
            response: { id: 'TEST', role: 'ADMIN', name: 'Test User' }
        });}, 5000);
    };
}