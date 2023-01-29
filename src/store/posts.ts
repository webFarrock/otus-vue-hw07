import {defineStore} from 'pinia'
import type {IPost, IUser} from '@/api/typing'
import type {Ref} from 'vue'
import {ref} from 'vue'
import {fetchPosts, fetchUsers} from '@/api/JsonPlaceholder'

export const usePostsStore = defineStore('posts', () => {
  const initialized = ref(false)
  const posts: Ref<IPost[]> = ref([])
  const authors: Ref<IUser[]> = ref([])

  const postById = (id: number) => {
    const result = posts.value.find((item) => item.id === id)
    return result
  }

  const authorById = (id: number) => {
    const result = authors.value.find((item) => item.id === id)
    return result || null
  }

  const init = async () => {
    await initPosts()
    await initAuthors()
    initialized.value = true
  }

  const initPosts = async () => {
    if (posts.value.length) return
    posts.value = await fetchPosts()
  }

  const deletePost = (id: number) => {
    posts.value = posts.value.filter(item => item.id !== id)
  }

  const updatePost = (id: number, title: string, body: string) => {
    for (let i = 0; i < posts.value.length; i++) {
      if (posts.value[i].id === id) {
        posts.value[i] = {...posts.value[i], title, body}
        break
      }
    }
  }
  const createPost = (title: string, body: string) => {
    const id = getLastId() + 1
    const userId = 1 // fixed value
    const post = {userId, id, title, body}
    posts.value.push(post)
    return id
  }

  const getLastId = () => posts.value.map(({id}) => +id).sort((a, b) => a - b).pop() || 0

  const initAuthors = async () => {
    if (authors.value.length) return
    authors.value = await fetchUsers()
  }

  return {
    initialized,
    posts,
    authors,
    init,
    postById,
    deletePost,
    authorById,
    updatePost,
    createPost,
  }
})
