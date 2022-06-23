import React from "react";
import styles from "./Title.module.scss";

type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    const {title} = props;
    return (
        <div className={styles.title}>
            {title}
        </div>
    );
};
