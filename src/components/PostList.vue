<script setup lang="ts">
import {computed, ref} from 'vue'
import {storeToRefs} from 'pinia'
import {usePostsStore} from '@/store/posts'
import {searchHighlight, queryFound, postPath} from '@/helpers'
import FilterComponent from '@/components/FilterComponent.vue'

const postsStore = usePostsStore()
const {posts} = storeToRefs(postsStore)
const filter = ref('')
const displayPosts = computed(() => {
  if (!filter.value) return posts.value
  return posts.value
      .filter(item => {
        if (filter.value) return queryFound(item.title, filter.value)
        return true
      })
      .map(item => ({
        ...item,
        title: searchHighlight(item.title, filter.value)
      }))
})
const handleFilter = (v: string) => filter.value = v
</script>

<template>
  <h1>Post list</h1>
  <FilterComponent @filter="handleFilter" title="Filter post"/>
  <ul class="flex sm:flex-col overflow-hidden content-center justify-between posts-nav">
    <li class="pb-2 posts-nav__item"
        v-for="{id, title, selected} in displayPosts" :key="id"
        :class="{selected}"
    >
      <router-link :to="postPath(id)" v-html="title"/>
    </li>
  </ul>
</template>
