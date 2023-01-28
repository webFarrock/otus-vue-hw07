import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import PostList from '@/components/PostList.vue'
import AuthorList from '@/components/AuthorList.vue'
import PostItem from '@/components/PostItem.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'posts',
    component: PostList,
    children: [
      {
        path: '/posts/:postId',
        name: 'post',
        component: PostItem,
        props: (route) => ({postId: Number(route.params.postId), flag: true}),
      }
    ]
  },
  // {
  //   path: '/posts/:postId',
  //   name: 'post',
  //   component: PostItem,
  //   props: (route) => ({postId: Number(route.params.postId), flag: true}),
  // },
  {
    path: '/authors',
    name: 'authors',
    component: AuthorList
  },
  {
    path: '/new-post',
    name: 'newPost',
    component: PostList
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
})
