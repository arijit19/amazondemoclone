import React , {Component} from 'react'
import  { Link } from "react-router-dom";
import {connect} from 'react-redux';

import styles from "./auth.module.css";
import * as actions from "../../Store/actions/index";
import { checkValidation, updateObject } from '../../shared/Utility';

class Auth extends Component {
    state = {
        isRegistered: true,
        form : {
            fullName: {
                value: "",
                config: {
                    type: "text",
                    placeholder: "Full Name"
                },
                validation: {
                    required: true
                },
                valid: false,
            },
            email:{
                value: "",
                config: {
                    type: "email",
                    placeholder: "Enter your email"
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
            },
            password: {
                value: "",
                config: {
                    type: "password",
                    placeholder: "Enter you password",
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 16,
                },
                valid: false,
            },
            verifiy: {
                value: "",
                config: {
                    type: "password",
                    placeholder: "Enter same password",
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 16,
                },
                valid: false,
            }
        }
    }

    onSignUp = ()=>{
        this.setState({isRegistered: false})
    }

    onSignIn = ()=>{
        this.setState({isRegistered: true})
    }


    inputChangehandler = (event, formID)=> {
        let updatedForm = updateObject(this.state.form,{
            [formID]: updateObject(this.state.form[formID], {
                value: event.target.value,
                valid: checkValidation(this.state.form[formID].validation,event.target.value)
            })
        });
        this.setState({form: updatedForm })
    }

    formSignUptHandler = (e)=> {
        e.preventDefault();
        const emailID = 'email';
        const passwordID = 'password';
        const fullNameID = 'fullName';
        const fullName = this.state.form[fullNameID].value;
        const email = this.state.form[emailID].value;
        const password = this.state.form[passwordID].value;
        this.props.emailPasswordSignUp(email,password,fullName);
    }

    formSignIntHandler = (e)=> {
        e.preventDefault();
        const emailID = 'email';
        const passwordID = 'password';
        const email = this.state.form[emailID].value;
        const password = this.state.form[passwordID].value;
        this.props.emailPasswordSignIn(email,password);
    }

    render() {
        const btnActive = this.state.isRegistered ? 
        this.state.form.email.valid && this.state.form.password.valid :
        this.state.form.fullName.valid && this.state.form.email.valid && this.state.form.password.valid && this.state.form.verifiy.valid;
        let jsx = (
            <div className={styles.container} >
                <Link to="/">
                    <img className={styles.logo} src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
                </Link>
                <div className={styles.loginWrapper}>
                    <h1>SignUp</h1>
                    <form>
                        <h5>Your Name</h5>
                        <input 
                        type={this.state.form.fullName.config.type} 
                        placeholder={this.state.form.fullName.config.placeholder}
                        value={this.state.form.fullName.value}
                        onChange = {(event)=> this.inputChangehandler(event,"fullName")}/>
                        <h5>E-Mail</h5>
                        <input 
                        type={this.state.form.email.config.type}
                        placeholder={this.state.form.email.config.placeholder}
                        value={this.state.form.email.value}
                        onChange = {(event)=> this.inputChangehandler(event,"email")}/>
                        <h5>Password</h5>
                        <input 
                        type={this.state.form.password.config.type} 
                        placeholder={this.state.form.password.config.placeholder}
                        value={this.state.form.password.value}
                        onChange = {(event)=> this.inputChangehandler(event,"password")}/>
                        <input 
                        type={this.state.form.verifiy.config.type} 
                        placeholder={this.state.form.verifiy.config.placeholder}
                        value={this.state.form.verifiy.value}
                        onChange = {(event)=> this.inputChangehandler(event,"verifiy")}/>
                        <button disabled={!btnActive} onClick={this.formSignUptHandler}>SignUp</button>
                        <p>We will send you a email to verify your email address.
                        Click the link to success authorization.</p>
                    </form>
                    <div className={styles.footerSUWrapper}>
                        <span className={styles.span}>Already have an account?</span>
                        <span 
                        className={styles.spanClick} 
                        onClick={this.onSignIn}>SignIn</span>
                    </div>
                </div>
                
            </div>
        )
        if(this.state.isRegistered) {
            jsx = (
                <div className={styles.container} >
                    <Link to="/">
                        <img className={styles.logo} src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
                    </Link>
                    <div className={styles.loginWrapper}>
                        <h1>SignIn</h1>
                        <form>
                            <h5>E-Mail</h5>
                            <input 
                            type={this.state.form.email.config.type}
                            placeholder={this.state.form.email.config.placeholder}
                            value={this.state.form.email.value}
                            onChange = {(event)=> this.inputChangehandler(event,"email")}/>
                            <h5>Password</h5>
                            <input 
                            type={this.state.form.password.config.type} 
                            placeholder={this.state.form.password.config.placeholder}
                            value={this.state.form.password.value}
                            onChange = {(event)=> this.inputChangehandler(event,"password")}/>
                            <button disabled={!btnActive} onClick={this.formSignIntHandler}>SignIn</button>
                            <p>By continuing, you agree to Fake Amazon clone's Conditions of Use and Privacy Notice.</p>
                        </form>
                    </div>
                    <div className={styles.footerWrapper}>
                        <span>Need a Amazon-Clone Account?</span>
                        <button onClick={this.onSignUp}>Create your Amazon-Clone Account </button>
                    </div>
                </div>
            )
        }
        
        
        return jsx
    }
}

const mapDispatchToProps = dispatch => {

    return {
        emailPasswordSignIn: (email, password)=> (dispatch(actions.signInemailPassword(email, password))),
        emailPasswordSignUp: (email, password, fullName)=> (dispatch(actions.signUpemailPassword(email, password, fullName)))
    }
}
export default connect(null,mapDispatchToProps)(Auth);