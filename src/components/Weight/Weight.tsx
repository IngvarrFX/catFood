import React from "react";
import styles from "./Weight.module.scss";

type WeightPropsType = {
    weight: string
    unitWeight: string
    isStock: boolean
    isSelected: boolean
}

export const Weight = (props: WeightPropsType) => {

    const {weight, unitWeight, isStock, isSelected} = props;

    const style = isSelected ? styles.wrapper + " " + styles.selected : !isStock ? styles.wrapper + " " + styles.dark : styles.wrapper;

    return (
        <div className={style}>
            <div className={styles.weight}>{weight}</div>
            <div className={styles.unit}>{unitWeight}</div>
        </div>
    );
};
