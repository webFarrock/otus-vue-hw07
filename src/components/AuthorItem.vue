<script setup lang="ts">
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import {usePostsStore} from '@/store/posts'
import {authorsPath} from '@/helpers'
import BackBtn from '@/components/BackBtn.vue'
import NotFoundItem from '@/components/NotFoundItem.vue'

interface IProps {
  authorId: number;
}

const router = useRouter()
const props = defineProps<IProps>()
const {authorById} = usePostsStore()

const author = computed(() => authorById(props.authorId))
const authorNotFound = computed(() => !author.value)
const authorNotFoundTitle = computed(() => `Author #${props.authorId} not found`)
const handleBackBtn = () => router.push(authorsPath())
</script>

<template>
  <back-btn title="authors list" @click="handleBackBtn"/>
  <NotFoundItem v-if="authorNotFound" :title="authorNotFoundTitle"/>
  <div v-else-if="author" class="author">
    <h4>{{ author.name }}</h4>
    <div class="author__info info">
      <div class="info__item">
        Email: {{ author.email }}
      </div>
      <div class="info__item">
        Phone: {{ author.phone }}
      </div>
      <div class="info__item">
        Website: {{ author.website }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  margin-top: 10px;
}
</style>
