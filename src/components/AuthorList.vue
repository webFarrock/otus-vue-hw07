<script setup lang="ts">
import {computed, ref} from 'vue'
import FilterComponent from '@/components/FilterComponent.vue'
import {usePostsStore} from '@/store/posts'
import {storeToRefs} from 'pinia'
import {searchHighlight, queryFound} from '@/helpers'

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
        v-for="{id, name, selected} in displayAuthors" :key="id"
        :class="{selected}"
    >
      <router-link :to="'/'" v-html="name"/>
    </li>
  </ul>
</template>
