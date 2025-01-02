import React from 'react'

import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = React.useState([])
  const [newCommentText, setNewCommentText] = React.useState('')

  function handleNewCommentPost() {
    event.preventDefault()

    const newCommentId = Math.floor(Math.random() * 10e12)

    setComments(previousComments => [
      ...previousComments,
      { id: newCommentId, content: newCommentText, publishedAt: new Date() }
    ])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Field is required!')
  }

  function handleCommentRemove(commentIdToDelete) {
    setComments(previousComments => previousComments.filter(previousComment => {
      return previousComment.id !== commentIdToDelete
    }))
  }

  const parsedPublishDate = format(publishedAt, "LLLL d',' HH:mm aa")
  const parsedPublishDateToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  })

  const parsedContent = content.map(item => {
    const id = `${item.type}(${item.data})`

    if (item.type === 'link' && URL.canParse(item.anchor)) {
      return (
        <p key={id}>
          <a href={item.anchor}>{item.data}</a>
        </p>
      )
    }

    return <p key={id}>{item.data}</p>
  })

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src={author.avatarUrl}
          />

          <div className={styles.bio}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={parsedPublishDate}
          dateTime={publishedAt.toISOString()}
        >
          Published {parsedPublishDateToNow}
        </time>
      </header>

      <div className={styles.content}>
        {parsedContent}
      </div>

      <form onSubmit={handleNewCommentPost} className={styles.commentForm}>
        <strong>Give a feedback</strong>

        <textarea
          name='comment'
          placeholder='Leave your comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Send comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={handleCommentRemove}
          />
        ))}
      </div>
    </article>
  )
}
