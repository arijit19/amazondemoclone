import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Orders from '../components/Orders/Orders';

const OrdersPage = ()=> (
    <Fragment>
        <NavigationBar/>
        <Orders/>
        <Footer/>
    </Fragment>
)

export default OrdersPage;