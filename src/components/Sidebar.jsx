import { PencilLine } from '@phosphor-icons/react'

import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1732951340728-d8b726561d50?q=50&w=500&h=80&auto=format&fit=crop'
      />

      <div className={styles.profile}>
        <Avatar hasBorder className={styles.avatar} src='https://github.com/yuriuliam.png' />

        <strong>Yuri Uliam</strong>
        <span>Frontend Software Engineer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} /> Edit your profile
        </a>
      </footer>
    </aside>
  )
}
