<template>
  <header class="w-full h-96 py-24 px-4 bg-[url(/bg-desktop-light.jpg)] dark:bg-[url(/bg-desktop-dark.jpg)] bg-cover">
    <div class="max-w-screen-md flex items-center justify-between mx-auto">
      <h1 class="text-3xl font-semibold uppercase tracking-[1.2rem]">Todo</h1>
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
  import ThemeToggle from './themeToggle.vue';
</script>

<style scoped></style>
