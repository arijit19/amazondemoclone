import { connect } from "react-redux";

import { NavOptionsdata } from "../../data/NavOptionsdata";
import NavOption from "../NavOption/NavOption";
import styles from "./navOptions.module.css";

const NavOptions = (props)=>{
    const t1 = props.fullName ? "Hello " + props.fullName : "Hello ";
    const t2 = props.isAuth ? "SignOut" : "SignIn";
    const lnk = props.isAuth ? "/signout": "/auth";

    return (
        <div className={styles.container}>
            <NavOption
                text1={t1}
                text2= {t2}
                link=   {lnk}
            />
            {NavOptionsdata.map((item,index)=>(
                <NavOption
                    key={index}
                    text1={item.text1}
                    text2={item.text2}
                    link={item.link}
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth,
        fullName: state.auth.fullName
    };
};
export default connect(mapStateToProps)(NavOptions);