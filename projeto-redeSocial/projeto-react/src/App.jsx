import { Post } from './componentes/Post';
import { Header } from './componentes/Header';
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/66326378?v=4',
      name: 'Glória Almeida',
      role: 'CTO @Rocketseat'

    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
      { type: 'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-01 12:00:00 ')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/84281880?v=4',
      name: 'Pedro Lenin',
      role: 'Developer @Bzutech'

    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
      { type: 'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-02 13:00:00 ')
  },
];

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

