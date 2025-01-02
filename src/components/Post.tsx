import React from 'react'

import { format, formatDistanceToNow } from 'date-fns'

import { PostContentType } from '../shared/PostContentType'
import { CommentData, PostData } from '../shared/types'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export const Post: React.FC<PostData> = ({ author, content, publishedAt }) => {
  const [comments, setComments] = React.useState<CommentData[]>([])

  function handleNewCommentPost(formData: FormData) {
    const newCommentId = Math.floor(Math.random() * 10e12)
    const newCommentContent = formData.get('comment')

    if (typeof newCommentContent !== 'string') {
      throw new Error('Invalid comment format!')
    }

    setComments(previousComments => [
      ...previousComments,
      { id: newCommentId, content: newCommentContent, publishedAt: new Date() }
    ])
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
  }

  function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Field is required!')
  }

  function handleCommentRemove(commentIdToDelete: number) {
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

    if (item.type === PostContentType.Link && URL.canParse(item.anchor)) {
      return (
        <p key={id}>
          <a href={item.anchor}>{item.data}</a>
        </p>
      )
    }

    return <p key={id}>{item.data}</p>
  })

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

      <form action={handleNewCommentPost} className={styles.commentForm}>
        <strong>Give a feedback</strong>

        <textarea
          name='comment'
          placeholder='Leave your comment'
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit'>
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
