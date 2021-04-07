import { Fragment } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Orders from '../components/Orders/Orders';

const OrdersPage = ()=> (
    <Fragment>
        <NavigationBar/>
        <Orders/>
    </Fragment>
)

export default OrdersPage;