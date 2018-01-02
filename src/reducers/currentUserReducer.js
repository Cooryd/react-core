import * as types from '../constants/actionTypeConstants';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function currentUser(state = initialState.currentUser, action) {
  switch (action.type) {
    case types.USER_DETAILS_FETCHED:
      return objectAssign({}, state, {fetchResponse: 'SUCCESS'}, action.response);
    default:
      return state;
  }
}