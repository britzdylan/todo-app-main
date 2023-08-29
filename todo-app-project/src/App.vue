<script setup lang="ts">
  import Header from './components/header.vue';
  import Todo from './components/todo.vue';
  import Footer from './components/footer.vue';
</script>

<template>
  <Header />
  <div class="w-full relative max-w-screen-md mx-auto flex-grow">
    <Todo />
  </div>
  <Footer />
</template>

<style scoped>
</style>
