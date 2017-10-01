import _ from "lodash";
import * as ActionTypes from '../actions/ActionTypes';


export default function(state = {paymentType : 'credit'}, action) {
  switch (action.type) {
    case ActionTypes.ADD_PAYMENT_INFORMATION:
      return Object.assign({}, action.payload);
    case ActionTypes.UPDATE_PAYMENT_METHOD:
      return Object.assign({}, action.payload);
    case ActionTypes.GET_PAYMENT_INFORMATION:
      return state;
    default:
      return state;
  }
}
