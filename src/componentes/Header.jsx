import styles from './Style/Header.module.css'

import bzuLogo from '../img/BzuLogo.svg';


export function Header() {
    return(
        <header className={styles.header}>
        <img src={bzuLogo} alt="logo do projeto"/>
        </header>
    );
}