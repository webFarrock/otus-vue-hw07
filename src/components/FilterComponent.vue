<script setup lang="ts">
import {ref, watch, unref, computed} from 'vue'

interface Props {
  title?: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Filter items',
  placeholder: 'Input some text',
})
const title = computed(() => props.title)
const placeholder = computed(() => props.placeholder)
const emit = defineEmits(['filter'])
const query = ref('')

watch(query, () => emit('filter', unref(query)))
</script>

<template>
  <div class="">
    <h4 class="mb-2">{{ title }}</h4>
    <div class="mb-3">
      <input v-model.trim="query" :placeholder="placeholder" type="text" class="form-control"/>
    </div>
  </div>
</template>
