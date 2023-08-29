<template>
  <div
    class="relative bg-light-100 dark:bg-dark-600 py-4 px-8 rounded flex items-center justify-start gap-4 shadow-2xl">
    <div
      @click="updateValue"
      class="w-8 h-8 bg-gradient-to-br from-[#57ddff] to-[#c058f3] border-none rounded-full flex items-center justify-center border-2 border-light-200 dark:border-dark-300 cursor-pointer transition-colors p-0">
      <svg
        class="stroke-current text-light-200 dark:text-dark-200"
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9">
        <path fill="none" stroke-width="1" d="M1 4.304L3.696 7l6-6" />
      </svg>
    </div>
    <input
      :type="type"
      v-model="todo"
      @keydown.enter="updateValue"
      :placeholder="placeholder"
      :class="inputClass" />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref } from 'vue';

  defineProps({
    placeholder: {
      type: String,
      default: 'Create a new todo...',
    },
    type: {
      type: String,
      default: 'text',
    },
    inputClass: {
      type: String,
      default:
        'p-0 w-full bg-transparent font-semibold text-light-500 dark:text-dark-100 active:outline-none focus:outline-none ',
    },
  });
  const todo = ref('');
  const emits = defineEmits(['add']);

  const updateValue = (event: Event) => {
    if (!todo.value) {
      alert('Please enter a todo item');
      return;
    }
    emits('add', (event.target as HTMLInputElement).value);
    todo.value = '';
  };
</script>

<style scoped>
  /* You can add any custom styles if needed */
</style>
