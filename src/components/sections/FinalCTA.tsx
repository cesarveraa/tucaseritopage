import React from 'react';
import styles from './FinalCTA.module.css';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
    return (
        <section className={styles.cta}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>¿Listo para llevar tu tienda al siguiente nivel?</h2>
                <p className={styles.subtitle}>Únete a las decenas de negocios que ya están aumentando su rentabilidad con Tu Caserito.</p>
                <Button variant="primary" size="lg" className={styles.button}>Quiero digitalizar mi tienda</Button>
            </div>
            <div className={styles.glow}></div>
        </section>
    );
};
