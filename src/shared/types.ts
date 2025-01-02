import { PostContentType } from "./PostContentType";

type PostContentData =
  | { type: PostContentType.Paragraph, data: string }
  | { type: PostContentType.Link, data: string, anchor: string }

export type AuthorData = { avatarUrl: string; name: string; role: string }

export type PostData = {
  id: number
  author: AuthorData
  content: PostContentData[]
  publishedAt: Date
}

export type CommentData = { id: number, content: string, publishedAt: Date }