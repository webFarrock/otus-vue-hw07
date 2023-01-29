import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import {
  ROUTE_POSTS,
  ROUTE_POST,
  ROUTE_AUTHORS,
  ROUTE_AUTHOR,
  ROUTE_POST_EDIT,
  ROUTE_POST_ADD,
} from '@/constants'

const PostList = () => import(/* webpackChunkName: "" */ '@/components/PostList.vue')
const AuthorList = () => import(/* webpackChunkName: "" */ '@/components/AuthorList.vue')
const PostItem = () => import(/* webpackChunkName: "" */ '@/components/PostItem.vue')
const AuthorItem = () => import(/* webpackChunkName: "" */ '@/components/AuthorItem.vue')
const MainView = () => import(/* webpackChunkName: "" */ '@/views/MainView.vue')
const PostEdit = () => import(/* webpackChunkName: "" */ '@/components/PostEdit.vue')

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
            path: '/posts/add',
            name: ROUTE_POST_ADD,
            component: PostEdit,
          },
          {
            path: '/posts/:postId/edit',
            name: ROUTE_POST_EDIT,
            component: PostEdit,
            props: (route) => ({postId: Number(route.params.postId), flag: true}),
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
