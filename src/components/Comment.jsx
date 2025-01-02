import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import React from 'react'
import { format, formatDistanceToNow } from 'date-fns'

export function Comment({ comment, onDeleteComment }) {
  const [likeCount, setLikeCount] = React.useState(0)

  function handleCommentDeletion() {
    onDeleteComment(comment.id)
  }

  function handleLikeComment() {
    setLikeCount(previousCount => previousCount + 1)
  }

    const parsedPublishDate = format(comment.publishedAt, "LLLL d',' HH:mm aa")
    const parsedPublishDateToNow = formatDistanceToNow(comment.publishedAt, {
      addSuffix: true
    })

  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/yuriuliam.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Uliam</strong>
              
              <time
                title={parsedPublishDate}
                dateTime={comment.publishedAt.toISOString()}
              >
                Published {parsedPublishDateToNow}
              </time>
            </div>

            <button title='Delete comment' onClick={handleCommentDeletion}>
              <Trash size={20} />
            </button>
          </header>
          
          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}