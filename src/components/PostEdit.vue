<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import BackBtn from '@/components/BackBtn.vue'
import {usePostsStore} from '@/store/posts'
import {postPath, postsPath, postEditPath} from '@/helpers'

interface IProps {
  postId?: number;
}

const router = useRouter()
const title = ref('')
const body = ref('')
const props = defineProps<IProps>()
const getEmptyPost = () => ({title: '', body: ''})
const {postById, updatePost, createPost} = usePostsStore()
const post = computed(() => {
  if (!props.postId) return getEmptyPost()
  return postById(props.postId) || getEmptyPost()
})

const componentTitle = computed(() => props.postId ? `Editing post #${props.postId}` : 'Creating new post')
const backBtnTitle = computed(() => props.postId ? `post #${props.postId}` : 'post list')
const backRoute = computed(() => props.postId ? postPath(props.postId) : postsPath())
const handleBack = () => router.push(backRoute.value)
const handleSave = () => {
  if (props.postId) {
    updatePost(props.postId, title.value, body.value)
    alert('Post updated')
    return
  }
  const id = createPost(title.value, body.value)
  alert('Post created')
  router.push(postEditPath(id))
}

watch(post, (v) => {
  title.value = v.title
  body.value = v.body
}, {immediate: true})
</script>

<template>
  <back-btn :title="backBtnTitle" @click="handleBack"/>
  <div class="post-edit">
    <h4>{{ componentTitle }}</h4>
    <div class="mb-3 post-edit__field">
      <label class="form-label">Title</label>
      <input v-model="title" type="email" class="form-control"/>
    </div>
    <div class="mb-3 post-edit__field">
      <label class="form-label">Body</label>
      <textarea v-model="body" class="form-control" rows="10"></textarea>
    </div>

    <div class="post-edit__actions actions">
      <button @click="handleSave" class="btn btn-primary actions__item">
        Save
      </button>
      <button @click="handleBack" class="btn btn-light actions__item">
        Cancel
      </button>
    </div>
  </div>
</template>
