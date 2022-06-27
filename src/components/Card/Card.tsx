import React from "react";
import styles from "./Card.module.scss";
import {DataType} from "../../mockData";
import {Weight} from "../Weight";
import {Title} from "../TItle";
import {Promotion} from "../Promotion";

type CardPropsType = {
    item: DataType
    callback: (itemId: string, isSelected: boolean) => void
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
        measureQuantity,
        measure,
        image,
        isSelected,
        inStock,
        description,
    } = props.item;

    const cardWrapper = !inStock ? styles.wrapper + " " + styles.outStock : isSelected ? styles.wrapper + " " + styles.select : styles.wrapper;

    const onClickSelect = () => {
        if (inStock) {
            props.callback(id, !isSelected)
        }
    }

    return (
        <div className={cardWrapper} onClick={onClickSelect}>
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
                    isStock={inStock}
                />
                <img src={image} alt=""/>
            </div>
            <div className={styles.description}>
                {
                    inStock
                        ? isSelected
                            ? <span>{description}</span>
                            : <span>Чего сидишь? Порадуй котэ,<span className={styles.bye}
                                                                    onClick={onClickSelect}>купи.</span></span>
                        : <span className={!inStock ? styles.end : ""}>{`Печалька, ${withWhatFeed} закончился.`}</span>
                }
            </div>
        </div>
    );
};
