import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextFieldModule from './modules/TextFieldModule'
import RaisedButton from 'material-ui/RaisedButton'

import { login } from '../actions/AuthActions'

import _ from 'lodash'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            errors: {}
        }
    }

    componentDidMount() {
    }

    isValid() {
        let errors = {}

        if (_.isEmpty(this.state.username)) {
            errors.username = "This field is required!"
        }
        if (_.isEmpty(this.state.password)) {
            errors.password = "This field is required!"
        }
        return {
            errors,
            isValid: _.isEmpty(errors)
        }
    }

    login() {
        console.log('login call')
        console.log(this.state)

        const { errors, isValid } = this.isValid()

        if (!isValid) {
            this.setState({ errors })
            console.log('error')
        }
        else {
            console.log('call api')
            this.setState({ errors: {}, isLoading: true })
            this.props.login(this.state)
                .then(
                res => {
                    console.log('success')
                    //console.log('token : ' + res.data.obj.token)
                    this.props.history.push('/');
                },
                err => {
                    console.log('error')
                    console.log(err)
                    this.setState({ errors: err.data, isLoading: false })
                }
                )
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='col-md-5 text-center' style={{ float: 'none', margin: 'auto' }}>
                    <h1>Login</h1>
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
                        <RaisedButton
                            label="Login"
                            primary={true}
                            className='common-button'
                            disabled={this.state.isLoading}
                            onClick={this.login.bind(this)} />
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

export default connect(mapStateToProps, { login })(Login)