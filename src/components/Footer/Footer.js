import styles from './footer.module.css';
import BackToTop from "../BackToTopButton/BackToTop"
import FooterOptions from '../FooterOptions/FooterOptions';

const Footer = ()=>(
    <div className={styles.footer}>
        <div className={styles.backToTop}><BackToTop/> </div>
        <FooterOptions/>
        <hr />
        <div className={styles.credit}>
            <img
            className={styles.logo}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            />
            <span className={styles.message}>
            Amazon clone developed by &copy;{" "}
            <a href="https://www.linkedin.com/in/arijitchandra/" target="_blank" rel="noreferrer">
                Arijit Chandra
            </a>
            </span>
        </div>
    </div>
)

export default Footer;