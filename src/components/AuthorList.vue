<script setup lang="ts">
import {computed, ref} from 'vue'
import {storeToRefs} from 'pinia'
import {usePostsStore} from '@/store/posts'
import {searchHighlight, queryFound, authorPath} from '@/helpers'
import FilterComponent from '@/components/FilterComponent.vue'

const postsStore = usePostsStore()
const {authors} = storeToRefs(postsStore)
const filter = ref('')
const displayAuthors = computed(() => {
  if (!filter.value) return authors.value
  return authors.value
      .filter(item => {
        if (filter.value) return queryFound(item.name, filter.value)
        return true
      })
      .map(item => ({
        ...item,
        name: searchHighlight(item.name, filter.value)
      }))
})
const handleFilter = (v: string) => filter.value = v
</script>

<template>
  <h1>Author list</h1>
  <FilterComponent @filter="handleFilter" title="Filter authors"/>
  <ul class="flex sm:flex-col overflow-hidden content-center justify-between posts-nav">
    <li class="pb-2 posts-nav__item"
        v-for="{id, name} in displayAuthors" :key="id"
    >
      <router-link :to="authorPath(id)" v-html="name"/>
    </li>
  </ul>
</template>
