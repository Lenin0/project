import styles from './Style/Post.module.css';


export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://tributecenteronline.s3-accelerate.amazonaws.com/Obituaries/26950864/Thumbnail.jpg"/>
                    <div className={styles.authorInfo}>
                        <strong>Glória almeida</strong>
                        <spam>Psychologist</spam>
                    </div>
                </div>
                <time title="11 de Janeiro as 08:13" dateTime="2023-01-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href=''>jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '} 
                <a href=''>#nlw </a>{' '}
                <a href=''>#rocketseat</a>
            </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder='Deixe um comentário' />
                
                <footer>
                    <button type="Submit">Publish</button>
                </footer>
                

            </form>
        </article>
    );
}