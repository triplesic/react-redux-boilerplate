import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import * as Lang from '../helpers/lang/th-lang';
import * as AppConstants from '../helpers/util/constant';

import reactLogo from '../asset/react.svg'

import RaisedButton from 'material-ui/RaisedButton';
import LoginPersonIco from 'material-ui/svg-icons/social/person';
import FontIcon from 'material-ui/FontIcon';

class Navigation extends Component {
    render() {
        const { pathname } = this.props.location;
        return (
            <div className='global-toolbar'>
                <div className='row' style={{ 'margin': '0rem' }}>
                    <div className='col-md-6 xs-only-text-center'>
                        <Link to='/'>
                            <span >
                                <img className='img-responsive' src={reactLogo} width="50" height="50" />
                            </span>
                        </Link>
                    </div>
                    <div className='col-md-6 xs-only-text-center text-right'>
                        <RaisedButton
                            className='common-button'
                            label="เข้าสู่ระบบ"
                            labelPosition="before"
                            primary={true}
                            icon={<LoginPersonIco />}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ bucket }) => {
    return {
        bucket,
        total: _.size(bucket) <= 0 ? 0 : _.map(bucket, bucket => bucket.quantity)
            .reduce((sum, n) => sum + n)
    }
}

export default withRouter(connect(mapStateToProps)(Navigation));