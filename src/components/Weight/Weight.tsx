import React from "react";
import styles from "./Weight.module.scss";

type WeightPropsType = {
    weight: string
    unitWeight: string
}

export const Weight = (props: WeightPropsType) => {

    const {weight, unitWeight} = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.weight}>{weight}</div>
            <div className={styles.unit}>{unitWeight}</div>
        </div>
    );
};
