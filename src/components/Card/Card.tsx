import React from "react";
import styles from "./Card.module.scss";
import {DataType} from "../../mockData";
import {Weight} from "../Weight";
import {Title} from "../TItle";

type CardPropsType = {
    item: DataType
}

export const Card = (props: CardPropsType) => {

    const {
        tagline,
        title,
        withWhatFeed,
        promotion,
        weight,
        unitWeight,
        description,
        measureQuantity,
        measure,
        image,

    } = props.item;

    return (
        <div className={styles.wrapper}>
            <span>{tagline}</span>
            <Title >
                <span>{title}</span>
            </Title>
            <Weight weight={weight} unitWeight={unitWeight}/>
            <img src={image} alt=""/>
        </div>
    );
};
