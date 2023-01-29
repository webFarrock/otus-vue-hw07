<script setup lang="ts">
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import PostUser from '@/components/PostUser.vue'
import PostComments from '@/components/PostComments.vue'
import {usePostsStore} from '@/store/posts'
import BackBtn from '@/components/BackBtn.vue'
import {postsPath} from '@/helpers'

interface IProps {
  postId: number;
}

const router = useRouter()
const props = defineProps<IProps>()

const {postById, deletePost} = usePostsStore()

const post = computed(() => postById(props.postId))
const handleBackBtn = () => router.push(postsPath())
const handleEdit = () => console.log('todo') // todo
const handleDelete = () => {
  if (!confirm('Delete current post ?')) return
  deletePost(props.postId)
  router.push(postsPath())
}
</script>

<template>
  <back-btn title="posts list" @click="handleBackBtn" />
  <div class="post">
    <h4>{{ post?.title }}</h4>
    <p>{{ post?.body }}</p>
  </div>
  <div class="post__actions actions">
    <button @click="handleEdit" class="btn btn-warning actions__item">
      Edit post
    </button>
    <button @click="handleDelete" class="btn btn-danger actions__item">
      Delete post
    </button>
  </div>
  <PostUser v-if="showUser" :user="user"/>
  <PostComments v-if="showComments" :comments="comments"/>
</template>

<style scoped lang="scss">
.actions{
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
