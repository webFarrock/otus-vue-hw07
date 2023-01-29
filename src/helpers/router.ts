import {ROUTE_POSTS, ROUTE_POST, ROUTE_AUTHOR, ROUTE_AUTHORS, ROUTE_POST_EDIT, ROUTE_POST_ADD} from '@/constants'

export const postsPath = () => ({name: ROUTE_POSTS})
export const postPath = (postId: number) => ({name: ROUTE_POST, params: {postId}})
export const postEditPath = (postId: number) => ({name: ROUTE_POST_EDIT, params: {postId}})
export const postAddPath = () => ({name: ROUTE_POST_ADD})
export const authorsPath = () => ({name: ROUTE_AUTHORS})
export const authorPath = (authorId: number) => ({name: ROUTE_AUTHOR, params: {authorId}})
