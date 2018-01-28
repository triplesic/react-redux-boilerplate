import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { common_branch, common_order_history } from '../helpers/lang/th-lang';

import reactLogo from '../asset/react.svg'

import CardModule from './modules/CardModule'

class HomeIndex extends Component {
    changeTextField(evt) {
        console.log(evt.target.value)
    }

    changeDropDown(evt, index, value) {
        console.log('index : ' + index + ' value : ' + value)
    }

    cardClick() {
        console.log('card click')
    }

    render() {
        return (
            <div className="container-fluid">
                <div className='col-md-3 common-vertical-padding'>
                    <CardModule
                        title='Customer'
                        subtitle='management'
                        avatar={reactLogo}
                        cardStyle={{ backgroundColor: 'rgb(250, 250, 250)' }}
                        //buttonLabel='Customer management'
                        redirect='/customer'
                        onClick={this.cardClick} />
                </div>
                <div className='col-md-3 common-vertical-padding'>
                    <CardModule
                        title='Facebook OAUTH'
                        subtitle='Facebook OAUTH sample'
                        avatar={reactLogo}
                        cardStyle={{ backgroundColor: 'rgb(250, 250, 250)' }}
                        //buttonLabel='Machine management'
                        redirect='/facebook_oauth'
                        onClick={this.cardClick} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, {})(HomeIndex)
