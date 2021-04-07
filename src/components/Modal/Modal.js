import React, { Component,Fragment } from 'react';

import Backdrop from './Backdrop/Backdrop';
import styles from "./modal.module.css";

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.disable !== this.props.disable || nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render () {

        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={styles.modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className={styles.modal__posts}>
                        {this.props.children}
                    </div>
                    <div className={styles.modal__buttons}>
                        <button 
                        className={[styles.modal__button , styles.Cancle].join(' ')}
                        onClick={this.props.modalClosed}>ok</button>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default Modal;