<script setup lang="ts">
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import type {IComment, IPost, IUser} from '@/api/typing'
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
const emit = defineEmits(['delete'])
const {postById, deletePost} = usePostsStore()

const post = computed(() => postById(props.postId))
// const user = computed(() => props.user)
// const showUser = computed(() => user.value !== null)
// const comments = computed(() => props.comments)
// const showComments = computed(() => comments.value.length > 0)
const handleClick = () => {
  if (confirm('Delete current post ?')) {
    deletePost(props.postId)
    router.push(postsPath())
  }
}
const handleBackBtn = () => router.push(postsPath())
</script>

<template>
  <back-btn title="posts list" @click="handleBackBtn" />
  <div class="post">
    <h4>{{ post?.title }}</h4>
    <p>{{ post?.body }}</p>
  </div>
  <div class="post__actions actions">
    <button @click="handleClick" class="btn btn-warning actions__item">
      Edit post
    </button>
    <button @click="handleClick" class="btn btn-danger actions__item">
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
  &__item{

  }
}
</style>
