import React from 'react';
import styles from './BusinessImpact.module.css';

const impacts = [
    {
        title: "Reduce quiebres de stock",
        description: "Evita perder ventas por no tener el producto que el cliente busca.",
        icon: "📉"
    },
    {
        title: "Detecta productos rentables",
        description: "Conoce qué productos dejan más margen y rotan más rápido.",
        icon: "💰"
    },
    {
        title: "Automatiza WhatsApp",
        description: "Atiende a tus clientes corporativos y de barrio automáticamente.",
        icon: "🤖"
    },
    {
        title: "Datos Accionables",
        description: "Convierte cada interacción y venta en información útil para tomar decisiones.",
        icon: "📊"
    }
];

export const BusinessImpact = () => {
    return (
        <section id="impact" className={styles.impact}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Resultados medibles para tu negocio</h2>
                    <p className={styles.subtitle}>
                        Tu Caserito no es solo un registro, es una herramienta de crecimiento diseñada para mejorar la rentabilidad de tu tienda.
                    </p>
                    <ul className={styles.list}>
                        {impacts.map((item, idx) => (
                            <li key={idx} className={styles.item}>
                                <div className={styles.icon}>{item.icon}</div>
                                <div>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    <p className={styles.itemDesc}>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.visual}>
                    <div className={styles.statsCard}>
                        <div className={styles.statLabel}>Aumento promedio en ventas</div>
                        <div className={styles.statValue}>+18.5%</div>
                        <div className={styles.statContext}>en primeros 3 meses</div>
                    </div>
                    <div className={`${styles.statsCard} ${styles.offset}`}>
                        <div className={styles.statLabel}>Tiempo ahorrado en inventario</div>
                        <div className={styles.statValue}>12h</div>
                        <div className={styles.statContext}>al mes por tienda</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
