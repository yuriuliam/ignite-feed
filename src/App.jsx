import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yuriuliam.png',
      name: 'Yuri Uliam',
      role: 'Frontend Software Engineer'
    },
    content: [
      { type: 'paragraph', data: 'Hello! Yuri here. 👋' },
      { type: 'paragraph', data: `I've been working with React recently!` },
      { type: 'link', data: 'ignite-feed.yuriuliam.com', anchor: 'https://ignite-feed.yuriuliam.com' },
    ],
    publishedAt: new Date('2024-04-11 15:24:16')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/yuriuliam.png',
      name: 'Yuri Uliam',
      role: 'Frontend Software Engineer'
    },
    content: [
      { type: 'paragraph', data: 'What do you think it will be for 2025?' },
      { type: 'paragraph', data: 'Let me know in the comments :)' },
    ],
    publishedAt: new Date('2024-12-31 17:36:11')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
