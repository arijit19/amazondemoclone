import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import Subtotal from "../Subtotal/Subtotal";
import styles from "./checkout.module.css";

const Checkout = ()=>(
 <div className={styles.container}>
    <div>
        <img 
        className={styles.adImg}
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
        alt="Ad"/>
        <div>
            <h2 className={styles.title}>Your Shopping Basket</h2>
            <CheckoutProducts isReview={false}/>
        </div>
    </div>
    <div>
        <Subtotal/>
    </div>
 </div>   
)

export default Checkout;