import axios, {Axios} from 'axios'
import type {IPost, IUser, IComment} from '@/api/typing'

class JsonPlaceholder {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com'
  private request: Axios

  constructor() {
    this.request = axios.create({
      baseURL: this.baseUrl,
    })
  }

  async fetchPosts() {
    const {data} = await this.request.get<IPost[]>('/posts')
    return data || []
  }

  async fetchComments(postId: number) {
    const {data} = await this.request.get<IComment[]>(`/posts/${postId}/comments`)
    return data || []
  }

  async fetchUsers() {
    const {data} = await this.request.get<IUser[]>('/users')
    return data || null
  }

}

const instance = new JsonPlaceholder()
export const fetchPosts = () => instance.fetchPosts()
export const fetchComments = (postId: number) => instance.fetchComments(postId)
export const fetchUsers = () => instance.fetchUsers()
