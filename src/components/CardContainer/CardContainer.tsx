import React from "react";
import styles from "./CardContainer.module.scss";
import {Card} from "../Card";
import {data} from "../../mockData";
import {Title} from "../TItle";

export const CardContainer = () => {
    return (
        <div className={styles.wrapper}>
            <Title>
                <span className={styles.question}>Ты сегодня покормил кота?</span>
            </Title>
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
