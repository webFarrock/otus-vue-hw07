import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import PostList from '@/components/PostList.vue'
import AuthorList from '@/components/AuthorList.vue'
import PostItem from '@/components/PostItem.vue'
import MainView from '@/views/MainView.vue'

import {
  ROUTE_POSTS,
  ROUTE_POST,
  ROUTE_AUTHORS,
} from '@/constants'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '/',
        name: ROUTE_POSTS,
        component: PostList,
      },
      {
        path: '/posts/:postId',
        name: ROUTE_POST,
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
    name: ROUTE_AUTHORS,
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
