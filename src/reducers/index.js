import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import ShoppingReducer, {bucketReducer, orderEventReducer, stockReducer} from './shopping_reducer';
import DeliveryReducer from './delivery_reducer';
import OrderSummary, { orderSummaryUploadReducer } from './order_summary_reducer';
import PaymentReducer from './payment_reducer';
import AuthReducer from './auth_reducer';


const rootReducer = combineReducers({
    form: FormReducer,
    shopping: ShoppingReducer,
    stockTotal: stockReducer,
    bucket: bucketReducer,
    orderEvent: orderEventReducer,
    delivery: DeliveryReducer,
    orderSummary: OrderSummary,
    orderSummaryUpload: orderSummaryUploadReducer,
    payment: PaymentReducer,
    auth: AuthReducer
});

export default rootReducer;