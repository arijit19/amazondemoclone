import { Fragment } from 'react';

import Home from "../components/Home/Home";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const HomePage = ()=>(
    <Fragment>
        <NavigationBar/>
        <Home/>
    </Fragment>
)

export default HomePage;