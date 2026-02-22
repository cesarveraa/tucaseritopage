import React from 'react';
import styles from './Header.module.css';
import { Button } from '../ui/Button';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container flex items-center justify-between ${styles.inner}`}>
                <div className={styles.logo}>
                    <span>Tu</span>Caserito
                </div>
                <nav className={`flex items-center gap-6 ${styles.nav}`}>
                    <a href="#features" className="transition-all hover-lift">Características</a>
                    <a href="#demo" className="transition-all hover-lift">Demo</a>
                    <a href="#impact" className="transition-all hover-lift">Impacto</a>
                </nav>
                <div className={styles.actions}>
                    <Button variant="outline" size="sm">Ingresar</Button>
                    <Button variant="primary" size="sm" className="ml-4">Solicitar Piloto</Button>
                </div>
            </div>
        </header>
    );
};
