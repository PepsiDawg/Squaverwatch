import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { test } from '../actions/testAction';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class TestComp extends Component {
    constructor(props) {
        super(props);

        this.name = 'matches';
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.test("seasons");
    }

    render() {
        const { user } = this.props.auth;
        const greeting = user ? "Hello " + user.displayName + "!" : "You are not logged in!";

        return (
            <div>
                <div>{greeting}</div>
            </div>
        )
    }
}

TestComp.propTypes = {
    test: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        name: state.collection.name,
        auth: state.auth,
    }
};

const firestoreCollection = (props) => {
    const name = props.name;
    return [
        { collection: name }
    ];
}

export default compose(
    connect(mapStateToProps, { test }),
    firestoreConnect(firestoreCollection)
)(TestComp);