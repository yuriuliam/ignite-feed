import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/yuriuliam.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Uliam</strong>
              
              <time
                title='17/04/2024 15:24:16'
                dateTime='2024-04-11 15:24:16'
              >
                Published an hour ago
              </time>
            </div>

            <button title='Delete comment'>
              <Trash size={20} />
            </button>
          </header>
          
          <p>Congrats!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}