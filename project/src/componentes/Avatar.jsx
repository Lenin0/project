import styles from './Style/Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avartar} 
        src={src}/>
    );  
}