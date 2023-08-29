<template>
  <div
    class="relative bg-light-100 dark:bg-dark-600 py-4 px-8 flex items-center justify-start gap-4 text-light-500 dark:text-dark-100">
    <CheckBox v-model="isComplete" @update:modelValue="updateTodo" />
    <p
      :class="{ 'line-through text-light-300 dark:text-dark-400': isComplete }">
      {{ props.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
  export interface Todo {
    id: number;
    value: string;
    completed: boolean;
  }
  import { defineProps, defineEmits, ref, watch } from 'vue';
  import CheckBox from './checkbox.vue';

  const props = defineProps<Todo>();
  const isComplete = ref(props.completed);
  const emits = defineEmits(['complete', 'incomplete']);

  const updateTodo = () => {
    if (isComplete.value) {
      emits('complete', props.id);
    } else {
      emits('incomplete', props.id);
    }
  };

  watch(
    () => props.completed,
    () => {
      isComplete.value = props.completed;
    }
  );
</script>

<style scoped>
  /* You can add any custom styles if needed */
</style>
