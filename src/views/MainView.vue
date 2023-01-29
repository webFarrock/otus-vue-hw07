<script lang="ts" setup>
import {onBeforeMount} from 'vue'
import {storeToRefs} from 'pinia'
import {usePostsStore} from '@/store/posts'
import NavigationMain from '@/components/NavigationMain.vue'
import Loader from '@/components/Loader.vue'

const postsStore = usePostsStore()
const {initialized} = storeToRefs(postsStore)
onBeforeMount(() => postsStore.init())

</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Otus vue home work 07</span>
      </a>
      <NavigationMain class="nav-pills"></NavigationMain>
    </header>

    <main>
      <router-view v-if="initialized"></router-view>
      <Loader v-else />
    </main>

    <footer class="py-3 my-4">
      <NavigationMain class="justify-content-center border-bottom pb-3 mb-3"></NavigationMain>
    </footer>
  </div>
</template>
