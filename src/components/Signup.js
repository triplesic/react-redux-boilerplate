import React, { Component } from 'react'
import { connect } from 'react-redux';

import TextFieldModule from './modules/TextFieldModule'
import RaisedButton from 'material-ui/RaisedButton'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            name: '',
            isLoading: false,
            errors: {}
        }
    }
    // validatePassword() {
    //     let passWordErr = {}

    //     if (!_.isEqual(this.state.password, this.state.confirmPassword)) {
    //         errors.password = "Password not match!"
    //         errors.confirmPassword = "Password not match!"
    //     }

    //     return {
    //         passWordErr,
    //         isPasswordValid: _.isEmpty(passWordErr)
    //     }
    // }

    isValid() {
        let errors = {}

        if (_.isEmpty(this.state.username)) {
            errors.username = "This field is required!"
        }
        if (_.isEmpty(this.state.password)) {
            errors.password = "This field is required!"
        }
        if (_.isEmpty(this.state.confirmPassword)) {
            errors.confirmPassword = "This field is required!"
        }
        if (_.isEmpty(this.state.name)) {
            errors.name = "This field is required!"
        }

        if (!_.isEqual(this.state.password, this.state.confirmPassword)) {
            errors.password = "Password not match!"
            errors.confirmPassword = "Password not match!"
        }
        // passwordValidate = validatePassword()

        // if (validatePassword().isValid)
        // {

        // }
        return {
            errors,
            isValid: _.isEmpty(errors)
        }
    }

    signup() {
        const { errors, isValid } = this.isValid()
        if (!isValid) {
            this.setState({ errors })
        } else {
            this.setState({ errors: {}, isLoading: true })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='col-md-5 text-center' style={{ float: 'none', margin: 'auto' }}>
                    <h1>Sign up</h1>
                    <div className='col-md-12'>
                        <TextFieldModule
                            value=''
                            lableName='Username'
                            hintText='username'
                            errorText={this.state.errors.username}
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <TextFieldModule
                            value=''
                            lableName='Password'
                            hintText='password'
                            type='password'
                            errorText={this.state.errors.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <TextFieldModule
                            value=''
                            lableName='Confirm password'
                            hintText='confirm password'
                            type='password'
                            errorText={this.state.errors.confirmPassword}
                            onChange={e => this.setState({ confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <TextFieldModule
                            value=''
                            lableName='Name'
                            hintText='Name Lastname'
                            errorText={this.state.errors.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <RaisedButton
                            label="Sign up"
                            primary={true}
                            className='common-button'
                            disabled={this.state.isLoading}
                            onClick={this.signup.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, {})(Signup)