import React, { Component } from 'react';

class LoginBar extends Component {

    //could do a request to the datatbase to get the actual name for the user
    state = {
        logInButton: "Log Out"
    }

    logOut = () => {
        this.props.logInStatus()
        this.setState({ logInButton: "Log In" })
    }
    logIn = () => {
        this.props.logInStatus()
        this.setState({ logInButton: "Log Out" })
    }

    render() {
        console.log(this.props)
        const { username } = this.props
        const { logInButton } = this.state

        if (logInButton === "Log Out") {
            return (
                <div className="login-bar">
                    <p className="login-text">Hello {username}</p>
                    <button onClick={this.logOut} className="login-button">Log Out</button>
                </div>
            );
        } else {
            return (
                <div className="login-bar">
                    <p className="login-text">Welcome Back</p>
                    <button onClick={this.logIn} className="login-button">Log In</button>
                </div>
            );
        }

    }
}

export default LoginBar;