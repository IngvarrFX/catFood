import React from "react";
import styles from "./CardContainer.module.scss";
import {Card} from "../Card";
import {data} from "../../mockData";

export const CardContainer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.question}>Ты сегодня покормил кота?</div>
            <div className={styles.items}>
                {data.map((item) => {
                    return <div className={styles.card}>
                        <Card key={item.id} item={item}/>
                    </div>
                })}
            </div>
        </div>
    );
};
