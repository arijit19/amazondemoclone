import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading';

import * as actionTypes from "../../Store/actions/index";
import { Redirect } from 'react-router';

class SignOut extends Component {
    componentDidMount() {
        this.props.isAuth && this.props.signOut() 
    }
    render() {
        let jsx = this.props.isAuth ? <Loading/> : <Redirect to="/"/>

        return jsx;
    }
}


const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: ()=> dispatch(actionTypes.signOutFirebase())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignOut);
