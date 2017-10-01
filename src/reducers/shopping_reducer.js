import _ from "lodash";
import * as ActionTypes from '../actions/ActionTypes';


export default function (state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_STOCKS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}

export const stockReducer = (state = { stockTotal : 0}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_STOCK_TOTAL:
      return { ...state, stockTotal: action.payload.data };
    default:
      return state;
  }
}

export const bucketReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_BUCKET:
      let itemAdded = {
        ...state,
        [action.payload.itemId]: {
          itemId: action.payload.itemId,
          quantity: !state[action.payload.itemId]
            ? action.payload.quantity
            : state[action.payload.itemId].quantity + action.payload.quantity,
          item: action.payload.item
        }
      };
      return itemAdded;
    case ActionTypes.REMOVE_ITEM_BUCKET:
      if (!state[action.payload.itemId]) {
        return state;
      }
      else if (state[action.payload.itemId].quantity - action.payload.quantity <= 0) {
        return _.omit(state, action.payload.itemId);
      }
      else {
        return {
          ...state,
          [action.payload.itemId]: {
            itemId: action.payload.itemId,
            quantity:
            state[action.payload.itemId].quantity - action.payload.quantity,
            item: state[action.payload.itemId].item
          }
        };
      }
    case ActionTypes.GET_ALL_ITEM_BUCKET:
      return { ...state };
    case ActionTypes.CLEAR_ALL_ITEM_BUCKET:
      return {};
    default:
      return state;
  }
};

export const orderEventReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.PUT_ITEM_ORDER_EVENT:
      return action.payload && !_.isEmpty(action.payload.data) ? { ...state, [action.payload.data.orderSeq]: action.payload.data }
        : { ...state };
    case ActionTypes.PULL_ITEM_ORDER_EVENT:
      return action.payload && !_.isEmpty(action.payload.data) ? { ...state, [action.payload.data.orderSeq]: action.payload.data }
        : { ...state };
    case ActionTypes.PLACE_ORDER_EVENT:
      return action.payload && !_.isEmpty(action.payload.data) ? { ...state, [action.payload.data.orderSeq]: action.payload.data }
        : { ...state };
    default:
      return state;
  }
};
