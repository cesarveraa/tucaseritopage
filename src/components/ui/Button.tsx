import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} transition-all hover-lift ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
