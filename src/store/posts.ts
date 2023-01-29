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
    return result
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
  }
})
