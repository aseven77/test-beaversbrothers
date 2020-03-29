import React from 'react';
import styles from "./Soon.module.css"
export default (props: any) => {
    const soon = props.active ? styles.soon +" active" : styles.soon;
    return (
        <div className={soon} >
            <div className={styles.preview}>
                <img src={props.img} alt=""/>
            </div>
            <div className={styles.info}>
                <strong className={styles.title}>{props.title}</strong> {props.desc}
            </div>
        </div>
    )
};