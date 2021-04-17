import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';

import Home from "../components/Home/Home";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const HomePage = ()=>(
    <Fragment>
        <NavigationBar/>
        <Home/>
        <Footer/>
    </Fragment>
)

export default HomePage;