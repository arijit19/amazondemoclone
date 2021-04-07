import React, { Fragment } from 'react'
import { pRowOne , pRowTwo, pRowThree} from '../../data/ProductData';
import Product from '../Product/Product';

import styles from "./products.module.css";

const Products = ()=>(
    <Fragment>
        <div className={styles.row}>
            {pRowOne.map((item,index)=>(
                <Product
                    key={index}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    id={item.id}
                />
            ))}
        </div>
        <div className={styles.row}>
            {pRowTwo.map((item,index)=>(
                <Product
                    key={index}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    id={item.id}
                />
            ))}
        </div>
        <div className={styles.row}>
            {pRowThree.map((item,index)=>(
                <Product
                    key={index}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    id={item.id}
                />
            ))}
        </div>
    </Fragment>
)

export default Products;