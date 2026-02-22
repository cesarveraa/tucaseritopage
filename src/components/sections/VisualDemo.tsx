import React from 'react';
import Image from 'next/image';
import styles from './VisualDemo.module.css';

export const VisualDemo = () => {
    return (
        <section id="demo" className={styles.demo}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Toda tu información en una sola pantalla</h2>
                    <p>Supervisa el estado de tu negocio desde cualquier dispositivo con nuestro panel de analítica avanzado.</p>
                </div>

                <div className={styles.visualContainer}>
                    <div className={`${styles.dashboardMockup} hover-lift`}>
                        <div className={styles.browserHeader}>
                            <div className={styles.dots}>
                                <span className={styles.dotRed}></span>
                                <span className={styles.dotYellow}></span>
                                <span className={styles.dotGreen}></span>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/dashboard_mockup_1771729116712.png"
                                alt="Dashboard Tu Caserito Ampliado"
                                fill
                                className={styles.image}
                            />
                        </div>
                    </div>

                    {/* Floating UI elements to simulate data points */}
                    <div className={`${styles.floatingCard} ${styles.card1}`}>
                        <div className={styles.cardIcon}>↗️</div>
                        <div>
                            <div className={styles.cardTitle}>Rotación Alta</div>
                            <div className={styles.cardValue}>+24% esta semana</div>
                        </div>
                    </div>

                    <div className={`${styles.floatingCard} ${styles.card2}`}>
                        <div className={styles.cardIconAlert}>⚠️</div>
                        <div>
                            <div className={styles.cardTitle}>Alerta de Stock</div>
                            <div className={styles.cardValue}>Aceite FINO (2 uds)</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
