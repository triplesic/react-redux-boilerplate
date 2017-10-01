import _ from "lodash";
import * as ActionTypes from '../actions/ActionTypes';


export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.ADD_DELIVERY_INFORMATION:
      return Object.assign({}, action.payload);
    case ActionTypes.GET_DELIVERY_INFORMATION:
      return state;
    default:
      return state;
  }
}
