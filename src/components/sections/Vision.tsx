import React from 'react';
import styles from './Vision.module.css';

export const Vision = () => {
    return (
        <section className={styles.vision}>
            <div className="container text-center">
                <h2 className={styles.quote}>
                    "Estamos construyendo la infraestructura digital del comercio tradicional en Bolivia."
                </h2>
                <div className={styles.divider}></div>
                <p className={styles.founded}>Fundado para los Caseritos de Bolivia</p>
            </div>
        </section>
    );
};
