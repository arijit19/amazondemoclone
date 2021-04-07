import BgImage from "../../images/background.jpg";
import Products from "../Products/Products";
import styles from "./home.module.css";

const Home = ()=>(
    <div className={styles.container}>
        <div>
            <img src={BgImage}
                className={styles.image}
                alt='Home'/>
            <div>
                <Products/>
            </div>
        </div>
        
    </div>
)

export default Home;