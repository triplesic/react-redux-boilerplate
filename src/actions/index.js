import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import _ from 'lodash';
import Promise from 'Bluebird'

export const ROOT_URL = 'http://localhost:8080';

export function addItemToBucket(itemId, quantity, item) {
    return {
        type: ActionTypes.ADD_ITEM_BUCKET,
        payload: { itemId: itemId, quantity: quantity, item: item }
    }
}

export function removeItemToBucket(itemId, quantity) {
    return {
        type: ActionTypes.REMOVE_ITEM_BUCKET,
        payload: { itemId: itemId, quantity: quantity }
    }
}

export function clearItemInBucket() {
    return {
        type: ActionTypes.CLEAR_ALL_ITEM_BUCKET
    }
}

export function getAllItemInBucket() {
    return {
        type: ActionTypes.GET_ALL_ITEM_BUCKET
    }
}