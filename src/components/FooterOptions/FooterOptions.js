import { Link } from "react-router-dom";

import styles from './footerOptions.module.css';
import { footer1,footer2,footer3, footer4 } from "../../data/FooterOptionData";

const FooterOptions = ()=>(
    <div className={styles.wrapper}>
        <div className={styles.tableCol}>
            <div className={styles.tableTitle}> {footer1.title}</div>
            <ul>
                {footer1.links.map((item,index)=>(
                    <Link 
                        className={styles.link}
                        key={index}
                        to={item.link}>
                        {item.title}
                    </Link>
                ))}
            </ul>
        </div>
        <div className={styles.tableCol}>
            <div className={styles.tableTitle}> {footer2.title}</div>
            <ul>
                {footer2.links.map((item,index)=>(
                    <Link 
                        className={styles.link}
                        key={index}
                        to={item.link}>
                        {item.title}
                    </Link>
                ))}
            </ul>
        </div>
        <div className={styles.tableCol}>
            <div className={styles.tableTitle}> {footer3.title}</div>
            <ul>
                {footer3.links.map((item,index)=>(
                    <Link 
                        className={styles.link}
                        key={index}
                        to={item.link}>
                        {item.title}
                    </Link>
                ))}
            </ul>
        </div>
        <div className={styles.tableCol}>
            <div className={styles.tableTitle}> {footer4.title}</div>
            <ul>
                {footer4.links.map((item,index)=>(
                    <Link 
                        className={styles.link}
                        key={index}
                        to={item.link}>
                        {item.title}
                    </Link>
                ))}
            </ul>
        </div>
    </div>
)

export default FooterOptions;