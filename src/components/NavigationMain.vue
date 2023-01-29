<script setup lang="ts">
import {authorsPath, postsPath, postAddPath} from '@/helpers'

const links = [
  {to: postsPath(), title: 'Posts'},
  {to: authorsPath(), title: 'Authors'},
  {to: postAddPath(), title: 'Create post'},
]
</script>

<template>
  <ul class="nav">
    <li class="nav-item"
        v-for="{to, title} in links"
        :key="title"
    >
      <router-link :to="to" class="nav-link">{{ title }}</router-link>
    </li>
  </ul>
</template>
