import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Target } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Style/Post.module.css';

export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        'vai se fuder puto safado'
    ])
    
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    } )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = newCommentText.length === 0;

    function habdleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    function deleteComment(comment) {
        const commentsWithoutDeleteOne = comments.filter(commentToDelete => {
           return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time>
                
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={habdleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe um comentário' 
                    onChange={handleNewCommentChange}
                    required
                />
                
                <footer>
                    <button type="Submit" disabled={isNewCommentEmpty}>Publish</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment  => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            deleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}