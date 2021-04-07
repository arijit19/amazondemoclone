import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {MdShoppingBasket} from 'react-icons/md';

import NavOptions from '../NavOptions/NavOptions';
import styles from "./navigationBar.module.css";
import { basketCount } from '../../Store/selectors/basketCount';

const NavigationBar = (props)=> (
    <header className={styles.container}>
       <Link to="/" >
            <img 
            className={styles.logo}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="logo"/>
       </Link>
        <div className={styles.search}>
            <input type="text" className={styles.input}/>
            <BsSearch className={styles.icon}/>
        </div>
        <NavOptions/>
        <Link to="/checkout" >
            <div className={styles.basketWrapper}>
                <MdShoppingBasket className={styles.basketIcon}/>
                <span className={styles.count}>{props.basketLen}</span>
            </div>
        </Link>
        
    </header>
)

const mapStateToProps = (state)=> {
    return {
        basketLen: basketCount(state.shop.basket)
    };
};


export default connect(mapStateToProps)(NavigationBar);