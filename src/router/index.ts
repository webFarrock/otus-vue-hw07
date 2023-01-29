import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import PostList from '@/components/PostList.vue'
import AuthorList from '@/components/AuthorList.vue'
import PostItem from '@/components/PostItem.vue'
import AuthorItem from '@/components/AuthorItem.vue'
import MainView from '@/views/MainView.vue'

import {
  ROUTE_POSTS,
  ROUTE_POST,
  ROUTE_AUTHORS,
  ROUTE_AUTHOR,
} from '@/constants'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainView,
    redirect: () => ({name: ROUTE_POSTS}),
    children: [
      {
        path: '/posts',
        children: [
          {
            path: '/posts',
            name: ROUTE_POSTS,
            component: PostList,
          },
          {
            path: '/posts/:postId',
            name: ROUTE_POST,
            component: PostItem,
            props: (route) => ({postId: Number(route.params.postId), flag: true}),
          },
        ]
      },
      {
        path: '/authors',
        children: [
          {
            path: '/authors',
            name: ROUTE_AUTHORS,
            component: AuthorList,
          },
          {
            path: '/authors/:authorId',
            name: ROUTE_AUTHOR,
            component: AuthorItem,
            props: (route) => ({authorId: Number(route.params.authorId), flag: true}),
          },
        ]
      },
    ]
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
})
