import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextFieldModule from './modules/TextFieldModule'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
    }

    login() {
        console.log('login call')
        console.log(this.state)
        //call login api
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
                        <RaisedButton label="Login" primary={true} className='common-button'
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

export default connect(mapStateToProps, {})(Login)