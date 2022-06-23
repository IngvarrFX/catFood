import React from "react";
import styles from "./Promotion.module.scss";
import {PromotionType} from "../../mockData";

type PromotionPropsType = {
    measureQuantity: number
    measure: string
    promotion: PromotionType
}


export const Promotion = (props: PromotionPropsType) => {
    const {measureQuantity, measure, promotion} = props;
    return (
        <div className={styles.promotionBlock}>
            <span className={styles.count}>{measureQuantity} </span>
            <span>{measure} </span>
            <br/>
            <span className={styles.count}>{promotion.count} </span>
            <span>{promotion.present}</span>
        </div>
    );
};
