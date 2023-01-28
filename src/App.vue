<script lang="ts" setup>
import {onBeforeMount, ref, computed, watch} from 'vue'
import {fetchPosts, fetchComments, fetchUsersByIds, addPost, deletePost} from '@/api/JsonPlaceholder'
import type {Ref} from 'vue'
import type {IPost, IUser, IComment} from '@/api/typing'
import NavigationMain from '@/components/NavigationMain.vue'
import {usePostsStore} from '@/store/posts'

interface IFilterPayload {
  postTitle: string;
  userName: string;
}

interface IAddPostPayload {
  title: string;
  body: string;
}

const postsStore = usePostsStore()

/*
const handleDelete = async (id: number) => {
  // api предоставляет только фейковое удаление - поэтому фильтруем то что уже получено
  const result = await deletePost(id)
  selectedPost.value = null
  posts.value = posts.value.filter(item => item.id !== id)
}
const handleAddPost = async (payload: IAddPostPayload) => {
  // в api фейковое добавление, поэтому добавленный посто складываем в существующий массив
  const result = await addPost({userId: 1, ...payload})
  posts.value = [result, ...posts.value]
}

 */
onBeforeMount(() => postsStore.init())

</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Otus vue home work 07</span>
      </a>
      <NavigationMain class="nav-pills"></NavigationMain>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="py-3 my-4">
      <NavigationMain class="justify-content-center border-bottom pb-3 mb-3"></NavigationMain>
    </footer>
  </div>
</template>
