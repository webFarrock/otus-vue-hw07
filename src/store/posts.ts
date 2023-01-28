import {defineStore} from 'pinia'
import type {IPost, IUser} from '@/api/typing'
import type {Ref} from 'vue'
import {ref} from 'vue'
import {fetchPosts, fetchUsersByIds} from '@/api/JsonPlaceholder'

export const usePostsStore = defineStore('posts', () => {
  const posts: Ref<IPost[]> = ref([])
  const authors: Ref<IUser[]> = ref([])

  const postById = (id: number) => {
    const result = posts.value.find((item) => item.id === id)
    console.log('result id: ', id)
    console.log('result: ', result)
    return result
  }

  const init = async () => {
    await initPosts()
    await initAuthors()
  }

  const initPosts = async () => {
    if (posts.value.length) return
    posts.value = await fetchPosts()
  }

  const initAuthors = async () => {
    if (authors.value.length) return
    if (!posts.value.length) return
    const ids = posts.value.map(item => item.userId)
    authors.value = await fetchUsersByIds(ids)
  }

  return {
    posts,
    authors,
    init,
    postById,
  }
})
