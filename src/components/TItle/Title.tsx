import React from "react";
import styles from "./Title.module.scss";

type TitlePropsType = {
    children: React.ReactElement
}

export const Title = (props: TitlePropsType) => {
    const {children} = props;
    return (
        <>
            {children}
        </>
    );
};
