<script setup lang="ts">
const links = [
  {to: {name: 'posts'}, title: 'Posts'},
  {to: {name: 'authors'}, title: 'Authors'},
]
</script>

<template>
  <ul class="nav">
    <li class="nav-item"
        v-for="{to, title} in links"
        :key="to"
    >
      <router-link :to="to" class="nav-link">{{ title }}</router-link>
    </li>
  </ul>
</template>
