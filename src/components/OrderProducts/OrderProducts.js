
import styles from "./orderProducts.module.css";

const OrderProducts = (props)=> (
    <div className={styles.container}>
        <img className={styles.image} src={props.image} alt="Prod"/>
        <div className={styles.infoWrapper}>
            <p className={styles.title}>{props.title}</p>
            <p>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className={styles.ratingWrapper}>
                {
                    Array(props.rating)
                    .fill()
                    .map((_,i)=>(
                        <p key={i}>⭐</p>
                    ))
                }
            </div>
            <div className={styles.buttonWrapper}>
                <div className={styles.qtyWrapper}>
                    <p>Qty </p>  
                    <span className={styles.qtyBox}>{props.qty}</span>
                </div>
            </div>
        </div>
    </div>
)

export default (OrderProducts);