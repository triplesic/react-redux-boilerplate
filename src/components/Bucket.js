import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import numeral from 'numeral';
import ProductItem from './ProductItem';
import PaymentStepper from './PaymentStepper';
import { createOrderEventReqObject, calculateTotalInBucket } from '../helpers/util/util-functions';
import { addItemToBucket, removeItemToBucket, getAllItemInBucket, putItemToOrderEvent, pullItemFromOrdervent } from '../actions';
import {
    link_back,
    common_bucket_detail,
    label_product,
    label_price,
    label_quantity,
    label_total,
    label_add_remove,
    label_order_item
} from '../helpers/lang/th-lang';

import paymentBanner from '../asset/payment_banner.jpg'


class Bucket extends Component {

    componentDidMount() {
    }

    renderTotal() {
        const { bucket } = this.props;
        if (_.isEmpty(bucket)) {
            return <tr></tr>
        }
        let total = calculateTotalInBucket(bucket);

        return (
            <tr>
                <th colSpan={3} className='app-font-color text-right'> {label_total} </th>
                <td className='app-font-color text-right'>
                    {numeral(total).format('0,0')}
                </td>
            </tr>
        );
    }

    renderGotoNextStep() {
        const { bucket } = this.props;
        if (_.isEmpty(bucket)) {
            return <div></div>
        }
        return (
            <div className='app-row text-right'>
                <button className="btn btn-info rounded" onClick={this.handleGoNextStep.bind(this)}>{label_order_item}</button>
            </div>
        )
    }

    handleGoNextStep() {
        this.props.history.push('/delivery');
    }

    addItem(item, quantity) {
        const { orderEvent } = this.props;
        if (!orderEvent || _.isEmpty(orderEvent)) {
            let value = createOrderEventReqObject(null, item.id, quantity);
            this.props.putItemToOrderEvent(value);
        }
        else {
            let orderSeq = _.map(orderEvent, event => event.orderSeq);
            let value = createOrderEventReqObject(orderSeq[0], item.id, quantity);
            this.props.putItemToOrderEvent(value);
        }
        this.props.addItemToBucket(item.id, 1, item);
    }

    removeItem(item, quantity) {
        const { orderEvent } = this.props;
        if (orderEvent && !_.isEmpty(orderEvent)) {
            let orderSeq = _.map(orderEvent, event => event.orderSeq);
            let value = createOrderEventReqObject(orderSeq[0], item.id, quantity);
            this.props.pullItemFromOrdervent(value);
        }
        this.props.removeItemToBucket(item.id, 1);
    }

    renderItems() {
        const { bucket } = this.props;
        if (!bucket) {
            return <div></div>
        }
        else {
            return _.map(bucket, chosenItem => {
                const { item } = chosenItem;
                return (
                    <tr key={chosenItem.itemId}>
                        <td className="app-font-color text-center">
                            <ProductItem itemInfo={item}
                                readOnly={true} />
                        </td>
                        <td className="app-font-color text-right">{chosenItem.quantity}</td>
                        <td className="app-font-color text-right">{numeral(chosenItem.quantity * item.price).format('0,0')}</td>
                        <td className="text-center">
                            <span onClick={() => this.addItem(item, 1)} className='bold-sign-character'>+</span> &nbsp;
                            <span onClick={() => this.removeItem(item, 1)} className='bold-sign-character'>-</span>
                        </td>
                    </tr>
                );
            });
        }
    }

    render() {
        return (
            <div className='container-fluid' style={{ 'padding': '0px' }}>
                <img src={paymentBanner} className='img-fluid' />
                <div className='app-row'>
                    <Link id='back' className='bold-sign-character' to='/cart'>{link_back}</Link>
                </div>
                <div className='app-row'>
                    <PaymentStepper stepIndex={0} />
                </div>
                <div className="app-table app-table-color">
                    <table className="table table-hover app-table-color">
                        <thead className='app-row'>
                            <tr>
                                <th className="app-font-color text-center">{label_product}</th>
                                <th className="app-font-color text-center">{label_quantity}</th>
                                <th className="app-font-color text-center">{label_price}</th>
                                <th className="app-font-color text-center">{label_add_remove}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderItems()}
                            {this.renderTotal()}
                        </tbody>
                    </table>
                </div>
                {this.renderGotoNextStep()}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        bucket: state.bucket,
        orderEvent: state.orderEvent
    }
}

export default withRouter(connect(mapStateToProps, {
    addItemToBucket,
    removeItemToBucket,
    getAllItemInBucket,
    putItemToOrderEvent,
    pullItemFromOrdervent
})(Bucket));