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
            name: ''
        }
    }

    signup() {
        console.log('sign up call')
        console.log(this.state)
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
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <TextFieldModule
                            value=''
                            lableName='Password'
                            hintText='password'
                            type='password'
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <TextFieldModule
                            value=''
                            lableName='Confirm password'
                            hintText='confirm password'
                            type='password'
                            onChange={e => this.setState({ confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <TextFieldModule
                            value=''
                            lableName='Name'
                            hintText='Name Lastname'
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className='col-md-12'>
                        <RaisedButton label="Sign up" primary={true} className='common-button'
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