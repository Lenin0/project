import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from './Style/Comment.module.css'


export function Comment({content, deleteComment}){
    const [likeCount, SetLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content);
    }
    
    function handleLikeComment(){
        SetLikeCount((state) =>{
            return state + 1
        });
    }
    
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
                        
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>{content}</p>
                </div>
                
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}