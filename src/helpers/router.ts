import {router} from '@/router'

export const postPath = (postId: number) => ({name: 'post', params: {postId}})
export const authorPath = (authorId: number) => ({name: 'author', params: {authorId}})
