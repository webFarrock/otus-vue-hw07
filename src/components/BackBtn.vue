<script setup lang="ts">
interface IProps {
  title: string;
}

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<IProps>(), {title: 'main page'})
const handleClick = () => emit('click')
</script>

<template>
  <div class="back-btn" @click="handleClick">
    <i class="bi bi-arrow-left-short"></i>
    Back to {{ props.title }}
  </div>
</template>

<style scoped lang="scss">
.back-btn {
  display: inline-block;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.7;
  }
}
</style>
