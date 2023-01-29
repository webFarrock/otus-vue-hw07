<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import {usePostsStore} from '@/store/posts'
import {postPath, postsPath, postEditPath} from '@/helpers'
import BackBtn from '@/components/BackBtn.vue'
import NotFoundItem from '@/components/NotFoundItem.vue'

interface IProps {
  postId?: number;
}

const router = useRouter()
const title = ref('')
const body = ref('')
const props = defineProps<IProps>()
const getEmptyPost = () => ({title: '', body: ''})
const {postById, updatePost, createPost} = usePostsStore()
const postFromStore = computed(() => props.postId && postById(props.postId) || null)
const post = computed(() => postFromStore.value || getEmptyPost())
const componentTitle = computed(() => props.postId ? `Editing post #${props.postId}` : 'Creating new post')
const backBtnTitle = computed(() => props.postId && postFromStore.value ? `post #${props.postId}` : 'post list')
const backRoute = computed(() => props.postId && postFromStore.value ? postPath(props.postId) : postsPath())
const postNotFound = computed(() => props.postId && !postFromStore.value)
const postNotFoundTitle = computed(() => `Post #${props.postId} not found`)

const handleBack = () => router.push(backRoute.value)
const chkFields = () => title.value && body.value
const handleSave = () => {
  if (!chkFields()) {
    alert('Fields cant be empty')
    return
  }
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
  <NotFoundItem v-if="postNotFound" :title="postNotFoundTitle"/>
  <div v-else class="post-edit">
    <h4>{{ componentTitle }}</h4>
    <div class="mb-3 post-edit__field">
      <label class="form-label">Title</label>
      <input v-model.trim="title" type="email" class="form-control"/>
    </div>
    <div class="mb-3 post-edit__field">
      <label class="form-label">Body</label>
      <textarea v-model.trim="body" class="form-control" rows="10"></textarea>
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
