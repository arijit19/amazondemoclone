import React, {useState} from 'react';
import styles from "./backToTop.module.css";

const BackToTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  

  return (
    visible &&
    <button onClick={scrollToTop} className={styles.button}>
      <span>Back To Top</span>
    </button>
  );
}
  
export default BackToTop;