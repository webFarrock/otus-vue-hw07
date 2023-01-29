import {ROUTE_POSTS, ROUTE_POST, ROUTE_AUTHOR, ROUTE_AUTHORS} from '@/constants'

export const postsPath = () => ({name: ROUTE_POSTS})
export const postPath = (postId: number) => ({name: ROUTE_POST, params: {postId}})
export const authorsPath = () => ({name: ROUTE_AUTHORS})
export const authorPath = (authorId: number) => ({name: ROUTE_AUTHOR, params: {authorId}})
