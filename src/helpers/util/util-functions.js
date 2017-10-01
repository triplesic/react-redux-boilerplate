export function createOrderEventReqObject(orderSeq, itemId, quantity) {
    if (!orderSeq) {
        return { stockId: itemId, quantity }
    } 
    else {
        return { orderSeq, stockId: itemId, quantity }
    }
}

export function calculateTotalInBucket(bucket) {
    return _.map(bucket, chosenItem => chosenItem.quantity * chosenItem.item.price)
                    .reduce((sum, n) => sum + n)
}

export function formatDate(dateArr){
    return new Date(Date.UTC(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5]));
}