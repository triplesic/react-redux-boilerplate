import _ from 'lodash';
import * as ActionTypes from '../actions/ActionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case ActionTypes.FETCH_ORDER_SUMMARY:
            return { ..._.mapKeys(action.payload.data, "id") };
        default:
            return state;
    }
}

export const orderSummaryUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.UPLOAD_IMAGE:
            return { [action.payload.data.id]: action.payload.data }
        case ActionTypes.FETCH_ORDER_SUM_SLIP_IMAGE:
            return (action.payload.data.imageInfo) ? { [action.payload.data.imageInfo.id]: action.payload.data.imageInfo } : null
        default:
            return state
    }
}