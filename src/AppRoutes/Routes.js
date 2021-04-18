import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Auth from '../components/Auth/Auth';
import CheckoutPage from './CheckoutPage';
import SignOut from '../components/SignOut/SignOut';
import PaymentPage from './PaymentPage';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Orders from '../components/Orders/Orders';

const Routes = (props) => {
    return (
        <Router>
        <Switch>
            <Route exact path={["/","/orders","/checkout","/payment"]}>
            <NavigationBar/>
                <Switch>
                    <Route path='/orders' exact >
                        <Orders/>
                    </Route>
                    <Route path='/checkout' exact >
                        <CheckoutPage/>
                    </Route>
                    <Route path='/payment' exact >
                        <PaymentPage/>
                    </Route>
                    <Route path='/' exact >
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </Route>
            <Route exact path={["/","/auth","/signout"]}>
                <Switch>
                    <Route path='/auth' exact >
                        {props.isAuth ? <Redirect to='/' /> : <Auth/>}
                    </Route>
                    <Route path='/signout' exact >
                        <SignOut/>
                    </Route>
                </Switch>
            </Route>
        </Switch>  
        </Router>
    );
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth
    };
};


export default connect(mapStateToProps)(Routes);
