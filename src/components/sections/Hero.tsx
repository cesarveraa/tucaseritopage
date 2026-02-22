import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Digitaliza tu tienda hoy mismo</h1>
                    <p className={styles.subtitle}>
                        Tu Caserito ya está ayudando a tiendas a controlar inventario, registrar ventas perdidas y vender por WhatsApp en tiempo real.
                    </p>
                    <div className={styles.actions}>
                        <Button variant="primary" size="lg">Solicitar acceso piloto</Button>
                        <Button variant="outline" size="lg">Ver demo</Button>
                    </div>
                    <div className={styles.metrics}>
                        <div className={styles.metric}>
                            <span className={styles.metricValue}>90+</span>
                            <span className={styles.metricLabel}>Tiendas Activas</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.metricValue}>Real</span>
                            <span className={styles.metricLabel}>Software Listo</span>
                        </div>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.mockupWrapper}>
                        {/* Dashboard Mockup - Main Background */}
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
                                    alt="Dashboard Tu Caserito"
                                    fill
                                    className={styles.image}
                                />
                            </div>
                        </div>

                        {/* Mobile Mockups - Floating */}
                        <div className={`${styles.mobileMockup} hover-lift`}>
                            <Image
                                src="/mobile_app_mockup_1771729135203.png"
                                alt="App Móvil Tu Caserito"
                                fill
                                className={styles.image}
                            />
                        </div>

                        <div className={`${styles.whatsappMockup} hover-lift`}>
                            <Image
                                src="/whatsapp_integration_1771729160460.png"
                                alt="WhatsApp Bot Tu Caserito"
                                fill
                                className={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background gradients */}
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>
        </section>
    );
};
