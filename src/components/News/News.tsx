import React from 'react';
import styles from "./news.module.css"
export default (props: any) => {
    const item = props.active ? styles.item +" active" : styles.item;
    return (
        <div className={item} >
            <div className={styles.preview}>
                <img src={props.img} alt=""/>
            </div>
            <div className={styles.info}>
                <strong className={styles.title}>{props.title}</strong> {props.desc}
            </div>
        </div>
    )
};