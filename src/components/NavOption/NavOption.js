import { Link } from "react-router-dom";
import styles from "./navOption.module.css";

const NavOption = (props)=> (
    <Link to={props.link} className={styles.links}>
        <div className={styles.container}>
            <span className={styles.textOne}>{props.text1}</span>
            <span className={styles.textTwo}>{props.text2}</span>
        </div>
    </Link>
)

export default NavOption;