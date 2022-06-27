import React, {useContext} from "react";
import styles from "./CardContainer.module.scss";
import {Card} from "../Card";
import {AppContext} from "../../context/context";
import {toggleSelectedItem} from "../../context/actions";

export const CardContainer = () => {

    const {state, dispatch} = useContext(AppContext);

    const onClickChangeStatus = (itemId: string, isSelected: boolean) => {
        dispatch(toggleSelectedItem(itemId, isSelected))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.question}>Ты сегодня покормил кота?</div>
            <div className={styles.items}>
                {state.map((item, index) => {
                    return <div className={styles.card}>
                        <Card key={index} item={item} callback={onClickChangeStatus}/>
                    </div>
                })}
            </div>
        </div>
    );
};
