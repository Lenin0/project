import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from './Style/Comment.module.css'


export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/Lenin0.png'/>
            <div className={styles.comentBox}>
                <div className={styles.comentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro lenin</strong>
                            <time title="11 de Janeiro as 08:13" dateTime="2023-01-11 08:13:30">cerca de 1h</time>
                        </div>
                        
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>Muito bom Glória, parabéns!</p>
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}