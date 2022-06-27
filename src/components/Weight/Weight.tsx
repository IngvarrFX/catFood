import React from "react";
import styles from "./Weight.module.scss";

type WeightPropsType = {
    weight: string
    unitWeight: string
    isStock: boolean
}

export const Weight = (props: WeightPropsType) => {

    const {weight, unitWeight, isStock} = props;

    const style = isStock ? styles.wrapper : styles.wrapper + " " + styles.dark;

    return (
        <div className={style}>
            <div className={styles.weight}>{weight}</div>
            <div className={styles.unit}>{unitWeight}</div>
        </div>
    );
};
