import React from "react";
import styles from "./Button.module.scss";

type ButtonPropsType = {
    children: React.ReactElement
    callback: () => void
}

export const Button = (props: ButtonPropsType) => {

    const {children, callback} = props;

    return (<button className={styles.btn} onClick={callback}>
            {children}
        </button>
    );
};
