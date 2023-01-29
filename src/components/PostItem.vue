<script setup lang="ts">
import {computed, onBeforeMount, ref} from 'vue'
import type {Ref} from 'vue'
import {useRouter} from 'vue-router'
import type {IComment} from '@/api/typing'
import {usePostsStore} from '@/store/posts'
import {postEditPath, postsPath} from '@/helpers'
import {fetchComments} from '@/api/JsonPlaceholder'
import BackBtn from '@/components/BackBtn.vue'
import PostUser from '@/components/PostUser.vue'
import PostComments from '@/components/PostComments.vue'
import NotFoundItem from '@/components/NotFoundItem.vue'

interface IProps {
  postId: number;
}

const router = useRouter()
const props = defineProps<IProps>()

const {postById, deletePost, authorById} = usePostsStore()

const comments: Ref<IComment[]> = ref([])
const post = computed(() => postById(props.postId))
const user = computed(() => post.value?.userId ? authorById(post.value.userId) : null)
const showUser = computed(() => !!user.value)
const showComments = computed(() => !!comments.value.length)
const postNotFound = computed(() => props.postId && !post.value)
const postNotFoundTitle = computed(() => `Post #${props.postId} not found`)
const handleBackBtn = () => router.push(postsPath())
const handleEdit = () => router.push(postEditPath(props.postId))
const handleDelete = () => {
  if (!confirm('Delete current post ?')) return
  deletePost(props.postId)
  router.push(postsPath())
}

onBeforeMount(async () => {
  comments.value = await fetchComments(props.postId)
})

</script>

<template>
  <back-btn title="posts list" @click="handleBackBtn"/>
  <NotFoundItem v-if="postNotFound" :title="postNotFoundTitle"/>
  <template v-else>
    <div class="post">
      <h4>Post #{{ post?.id }} "{{ post?.title }}"</h4>
      <p>{{ post?.body }}</p>
    </div>
    <PostUser v-if="showUser" :user="user"/>
    <div class="post__actions actions">
      <button @click="handleEdit" class="btn btn-warning actions__item">
        Edit post
      </button>
      <button @click="handleDelete" class="btn btn-danger actions__item">
        Delete post
      </button>
    </div>
    <PostComments v-if="showComments" :comments="comments"/>
  </template>
</template>

<style scoped lang="scss">
.actions {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
