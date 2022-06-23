import React from "react";
import styles from "./Card.module.scss";
import {DataType} from "../../mockData";
import {Weight} from "../Weight";
import {Title} from "../TItle";
import {Button} from "../Button";
import {Promotion} from "../Promotion";

type CardPropsType = {
    item: DataType
}

export const Card = (props: CardPropsType) => {

    const {
        id,
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
        isSelected,
    } = props.item;

    const onClickHandle = () => {
        console.log(id)
    }
    console.log(measure)

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardBlock}>
                <div className={styles.textWrapper}>
                    <div className={styles.tagline}>{tagline}</div>
                    <Title
                        title={title}
                    />
                    <div className={styles.taste}>{withWhatFeed}</div>
                    <Promotion
                        measureQuantity={measureQuantity}
                        measure={measure}
                        promotion={promotion}
                    />
                </div>
                <Weight
                    weight={weight}
                    unitWeight={unitWeight}
                />
                <img src={image} alt=""/>
            </div>
            <div className={styles.description}>
                {
                    isSelected
                        ? <span>{description}</span>
                        : <span>Чего сидишь? Порадуй котэ,<Button callback={onClickHandle}><span
                            className={styles.bye}>купи.</span></Button></span>
                }
            </div>
        </div>
    );
};
