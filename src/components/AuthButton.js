import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { login, logout, clearFirestore } from '../actions/authActions';

class AuthButton extends Component {
    constructor(props) {
        super(props);

        this.onLoginClick = this.onLoginClick.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLoginClick(e) {
        this.props.login();
    }

    onLogoutClick(e) {
        this.props.logout();
        this.props.clearFirestore();
    }

    render() {
        if (!isLoaded(this.props.auth)) {
            return null;
        }
        if (isEmpty(this.props.auth)) {
            return (
                <button onClick={this.onLoginClick}>Login with google</button>
            );
        }
        return (<button onClick={this.onLogoutClick}>Logout</button>)
    }
}

AuthButton.propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    clearFirestore: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.firebase.auth
})

export default compose(
    connect(mapStateToProps, { login, logout, clearFirestore }),
    firebaseConnect()
)(AuthButton);
