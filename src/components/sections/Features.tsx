import React from 'react';
import styles from './Features.module.css';

const featuresList = [
    {
        title: "Control de inventario en tiempo real",
        description: "Conoce exactamente qué tienes, qué falta y qué está por caducar al instante.",
        icon: "📦"
    },
    {
        title: "Registro de ventas perdidas",
        description: "Documenta qué te pidieron y no tenías, para asegurar tu próxima compra.",
        icon: "📈"
    },
    {
        title: "Comandos de voz en mostrador",
        description: "Consulta precios y stock hablando directamente a la aplicación.",
        icon: "🎙️"
    },
    {
        title: "Reportes automáticos PDF y Excel",
        description: "Genera cierres de caja y reportes de rotación con un par de toques.",
        icon: "📊"
    },
    {
        title: "WhatsApp con stock sincronizado",
        description: "Tu propio agente virtual responde consultas y toma pedidos 24/7.",
        icon: "💬"
    },
    {
        title: "Predicción de reposición con IA",
        description: "El sistema aprende qué vendes y te avisa exactamente cuándo reabastecer.",
        icon: "🤖"
    }
];

export const Features = () => {
    return (
        <section id="features" className={styles.features}>
            <div className="container">
                <div className="text-center mb-8">
                    <h2 className={styles.title}>Un sistema completo en una sola app</h2>
                    <p className={styles.subtitle}>
                        Todo lo que necesitas para profesionalizar tu tienda y aumentar tu rentabilidad.
                    </p>
                </div>

                <div className={styles.grid}>
                    {featuresList.map((feature, idx) => (
                        <div key={idx} className={`${styles.card} hover-lift`}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDesc}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
