import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src='https://github.com/yuriuliam.png'
          />

          <div className={styles.bio}>
            <strong>Yuri Uliam</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title='17/04/2024 15:24:16'
          dateTime='2024-04-11 15:24:16'
        >
          Published an hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello! Yuri here. 👋</p>
        <p>I&apos;ve been working with React recently!</p>
        <p>
          You can visit{' '}
          <a href='https://ignite-feed.yuriuliam.com'>ignite-feed.yuriuliam.com</a>
        </p>
        <p>
          <a href='#'>#newproject</a>{' '}
          <a href='#'>#react</a>{' '}
          <a href='#'>#javascript</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give a feedback</strong>

        <textarea
          placeholder='Leave your comment'
        />

        <footer>
          <button type='submit'>Send comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
