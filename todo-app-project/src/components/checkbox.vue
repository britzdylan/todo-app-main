<template>
  <div
    class="w-8 h-8 rounded-full flex items-center justify-center border-2 border-light-200 dark:border-dark-300 cursor-pointer transition-colors p-0"
    :class="{
      'bg-gradient-to-br from-[#57ddff] to-[#c058f3] border-none': modelValue,
    }"
    @click="toggleCheckbox">
    <svg
      class="stroke-current text-light-200 dark:text-dark-200"
      v-if="modelValue"
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="9">
      <path fill="none" stroke-width="1" d="M1 4.304L3.696 7l6-6" />
    </svg>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    modelValue: Boolean,
  });

  const emits = defineEmits(['update:modelValue']);

  const toggleCheckbox = () => {
    emits('update:modelValue', !props.modelValue);
  };
</script>

<style scoped>
  .checked {
    background-color: linear-gradient #57ddff to #c058f3;
    border: none;
  }
</style>
