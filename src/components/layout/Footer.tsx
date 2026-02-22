import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <span>Tu</span>Caserito
                    </div>
                    <p className={styles.description}>
                        Software inteligente para micromarkets y tiendas de barrio en Bolivia.
                    </p>
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.linkGroup}>
                        <h4 className={styles.groupTitle}>Producto</h4>
                        <a href="#features">Características</a>
                        <a href="#demo">Demostración</a>
                        <a href="#impact">Impacto</a>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4 className={styles.groupTitle}>Compañía</h4>
                        <a href="#">Sobre nosotros</a>
                        <a href="#">Contacto</a>
                        <a href="#">Privacidad</a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Tu Caserito. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
