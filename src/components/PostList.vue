<script setup lang="ts">
import {computed, ref} from 'vue'
import {storeToRefs} from 'pinia'
import {usePostsStore} from '@/store/posts'
import {searchHighlight, queryFound, postPath} from '@/helpers'
import FilterComponent from '@/components/FilterComponent.vue'

const postsStore = usePostsStore()
const {posts} = storeToRefs(postsStore)
const sortedPosts = computed(() => [...posts.value].sort((a, b) => b.id - a.id))
const filter = ref('')
const displayPosts = computed(() => {
  if (!filter.value) return sortedPosts.value
  return sortedPosts.value
      .filter(item => {
        if (filter.value) return queryFound(item.title, filter.value)
        return true
      })
      .map(item => ({
        ...item,
        title: searchHighlight(item.title, filter.value)
      }))
      .sort((a, b) => a.id - b.id)
})
const handleFilter = (v: string) => filter.value = v
</script>

<template>
  <h1>Post list</h1>
  <FilterComponent @filter="handleFilter" title="Filter post"/>
  <ul class="posts">
    <li class="posts__item"
        v-for="{id, title, selected} in displayPosts" :key="id"
        :class="{selected}"
    >
      [{{ id }}]
      <router-link :to="postPath(id)" v-html="title"/>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.posts {
  list-style-type: none;
  padding-left: 0;

  &__item {
    margin-bottom: 5px;
  }
}
</style>
