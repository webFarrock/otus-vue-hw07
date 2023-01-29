<script setup lang="ts">
import {computed} from 'vue'
import type {IComment} from '@/api/typing'

interface IProps {
  comments: IComment[];
}

const props = defineProps<IProps>()
const comments = computed(() => props.comments)
</script>

<template>
  <div class="comments">
    <h5>Comments</h5>
    <div class="comments__item" v-for="{id, name, body, email} in comments" :key="id">
      <div class="comments__item-name">{{ name }}</div>
      <div class="comments__item-body">{{ body }}</div>
      <div class="comments__item-email">{{ email }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comments {
  margin-top: 25px;

  &__item {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;

    &-email {
      text-align: right;
      font-style: italic;
    }
  }


}
</style>
