import React, { Component } from 'react'
import { connect } from 'react-redux'
import FacebookProvider, { Login } from 'react-facebook'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

class FacebookOauth extends Component {

    handleResponse = (data) => {
        console.log(data);
    }

    handleError = (error) => {
        this.setState({ error });
    }

    render() {
        return (
            <div className='container'>
                <h1>Facebook Oauth</h1>

                <FacebookProvider appId="327712014303204">
                    <Login
                        scope="email"
                        onResponse={this.handleResponse}
                        onError={this.handleError}
                    >
                        {/* <span>Login via Facebook</span> */}
                        <RaisedButton
                            primary={true}
                            label='Login via Facebook' >
                        </RaisedButton>
                    </Login>
                </FacebookProvider>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {})(FacebookOauth)