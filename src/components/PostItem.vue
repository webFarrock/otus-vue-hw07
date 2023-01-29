<script setup lang="ts">
import {computed, onBeforeMount, ref, watch} from 'vue'
import type {Ref} from 'vue'
import type {IComment, IUser} from '@/api/typing'
import {useRouter} from 'vue-router'
import PostUser from '@/components/PostUser.vue'
import PostComments from '@/components/PostComments.vue'
import {usePostsStore} from '@/store/posts'
import BackBtn from '@/components/BackBtn.vue'
import {postEditPath, postsPath} from '@/helpers'
import {fetchComments} from '@/api/JsonPlaceholder'

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

<style scoped lang="scss">
.actions {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
