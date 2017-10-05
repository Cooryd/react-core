import { USER_DETAILS_FETCHED } from '../constants/actionTypeConstants';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function currentUser(state = initialState.currentUser, action) {
  switch (action.type) {
    case USER_DETAILS_FETCHED:
      return objectAssign({}, state, {dateModified: action.dateModified});
    default:
      return state;
  }
}