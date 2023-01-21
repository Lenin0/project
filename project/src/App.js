import { Post } from './componentes/Post';
import { Header } from './componentes/Header';
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
          author ="Pedro Lenin" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque sodales diam, at dignissim dolor lacinia quis. Phasellus acorci non justo egestas lacinia. Curabitur tellus nibh, tincidunt vitae tincidunt sit amet, feugiat at mi. Maecenas consequat, tellus sed tincidunt pharetra, massa ante  vulputate ipsum, nec mattis nulla justo ut." 
          />

          <Post 
          author ="Rogério" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque sodales diam, at dignissim dolor lacinia quis. Phasellus acorci non justo egestas lacinia. Curabitur tellus nibh, tincidunt vitae tincidunt sit amet, feugiat at mi. Maecenas consequat, tellus sed tincidunt pharetra, massa ante  vulputate ipsum, nec mattis nulla justo ut." 
          />
        </main>
      </div>
    </div>
  );
}

export default App;

