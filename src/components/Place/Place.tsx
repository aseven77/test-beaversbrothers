import React from 'react';
import styles from "./place.module.css"
export default (props: any) => {
    const place = props.place ? styles.place +" "+ props.place : styles.place;
    return (
        <div className={place} >
            <div className={styles.preview}>
                <div className={styles.number}>
                    <span>{props.id}</span>
                </div>
                <img src={props.img} alt=""/>
            </div>
            <div className={styles.info}>
                <strong className={styles.title}>{props.title}</strong> {props.desc}
            </div>
        </div>
    )
};