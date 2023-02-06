import { Avatar } from './Avatar';
import styles from './Style/Sidebar.module.css';


export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/Lenin0.png"/>

                <strong>Pedro Lenin Dantas</strong>
                <span>web Developer</span>
            </div>

            <footer>
                <a href="#">
                Edit your profile
                </a>
            </footer>
        </aside>
    );
}