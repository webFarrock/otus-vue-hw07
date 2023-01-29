<script setup lang="ts">
interface IProps {
  title: string;
}

const props = defineProps<IProps>()
</script>
<template>
  <div class="not-found-item">
    <h5 class="not-found-item__title">{{ props.title }}</h5>
    <div class="not-found-item__icon">
      <i class="bi bi-emoji-frown"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-item {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    font-size: 50px;
  }
}
</style>
