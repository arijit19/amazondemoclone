import moment from 'moment';
import CurrencyFormat from "react-currency-format";

import OrderProducts from '../OrderProducts/OrderProducts';
import styles from "./order.module.css";

const Order = (props)=> (
    <div className={styles.wrapper}>
        <h2>Order: </h2>
        <p className={styles.orderID}>
            <small>{props.id}</small>
        </p>
        <p>{moment.unix(parseInt(props.created)).format("MMMM Do YYYY, h:mma")}</p>
        {props.basket.length>0 && props.basket.map((item,index)=>(
            <OrderProducts  
                key={index}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                id={item.id}
                qty={item.quantity}
            />
        ))}
        <CurrencyFormat
                renderText={(value)=>(
                    <h3 className={styles.orderTotal}>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={props.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
    </div>
)

export default Order;
