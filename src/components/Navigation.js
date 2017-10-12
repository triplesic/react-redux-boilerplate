import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import * as Lang from '../helpers/lang/th-lang';
import * as AppConstants from '../helpers/util/constant';

import reactLogo from '../asset/react.svg'

import RaisedButton from 'material-ui/RaisedButton';
import LoginPersonIco from 'material-ui/svg-icons/social/person';
import AddPersonIco from 'material-ui/svg-icons/social/person-add';
import FontIcon from 'material-ui/FontIcon';

import { logout } from '../actions/AuthActions'

import PropTypes from 'prop-types'

class Navigation extends Component {

    logout(e) {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        const { pathname } = this.props.location;
        const { isAuthenticated } = this.props.auth;

        const userLink = (
            <div className='col-md-6 xs-only-text-center text-right'>
                <RaisedButton
                    className='common-button'
                    label="Logout"
                    labelPosition="before"
                    secondary={true}
                    icon={<AddPersonIco />}
                    onClick={this.logout.bind(this)}
                />
            </div>
        )

        const guestLink = (
            <div className='col-md-6 xs-only-text-center text-right'>
                <Link to='signup' >
                    <RaisedButton
                        className='common-button'
                        label="Sign up"
                        labelPosition="before"
                        secondary={true}
                        icon={<AddPersonIco />}
                    />
                </Link>
                <Link to='login' >
                    <RaisedButton
                        className='common-button'
                        label="Login"
                        labelPosition="before"
                        primary={true}
                        icon={<LoginPersonIco />}
                    />
                </Link>
            </div>
        )

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
                    {isAuthenticated ? userLink : guestLink}

                </div>
            </div>
        );
    }
}

Navigation.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navigation));