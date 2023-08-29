<template>
  <main class="w-full flex flex-col gap-4 absolute -top-52">
    <TodoInput @add="addTodo" />
    <div
      class="flex flex-col gap-0 mt-4 divide-y divide-light-300 dark:divide-dark-500 rounded overflow-hidden shadow-2xl">
      <TodoItem
        v-for="todo in todos"
        v-bind="todo"
        @complete="completeTodo"
        @incomplete="incompleteTodo" />
      <footer class="grid grid-cols-3 py-3 px-6 bg-light-100 dark:bg-dark-600">
        <small class="text-light-400 dark:text-dark-400">{{ itemsLeft }}</small>
        <div class="flex items-center gap-2">
          <p
            @click="setView('all')"
            :class="{
              'text-primary cursor-pointer hover:text-primary':
                view.value === 'all',
              'text-light-400 dark:text-dark-400 cursor-pointer hover:text-primary':
                view.value !== 'all',
            }">
            All
          </p>
          <p
            @click="setView('active')"
            :class="{
              'text-primary cursor-pointer hover:text-primary':
                view.value === 'active',
              'text-light-400 dark:text-dark-400 cursor-pointer hover:text-primary':
                view.value !== 'active',
            }">
            Active
          </p>
          <p
            @click="setView('completed')"
            :class="{
              'text-primary cursor-pointer hover:text-primary':
                view.value === 'completed',
              'text-light-400 dark:text-dark-400 cursor-pointer hover:text-primary':
                view.value !== 'completed',
            }">
            Completed
          </p>
        </div>
        <small
          @click="clearCompleted"
          class="place-self-end text-light-400 dark:text-dark-400 cursor-pointer"
          >Clear Completed</small
        >
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { Todo } from './todoItem.vue';
  import { useStorage } from '@vueuse/core';
  import TodoInput from './todoInput.vue';
  import TodoItem from './todoItem.vue';

  interface View {
    value: 'all' | 'active' | 'completed';
  }

  const view = ref<View>({ value: 'all' });
  const allTodos = useStorage<Todo[]>('todos', []);
  const activeTodos = computed<Todo[]>(() =>
    allTodos.value.filter((todo: Todo) => !todo.completed)
  );
  const completedTodos = computed<Todo[]>(() =>
    allTodos.value.filter((todo: Todo) => todo.completed)
  );

  const completeTodo = (id: number) => {
    allTodos.value = allTodos.value.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    console.log('complete');
  };

  const incompleteTodo = (id: number) => {
    allTodos.value = allTodos.value.map((todo) => {
      if (todo.id === id) {
        todo.completed = false;
      }
      return todo;
    });
    console.log('incomplete');
  };

  const addTodo = (value: string) => {
    allTodos.value.push({
      id: allTodos.value.length + 1,
      value,
      completed: false,
    });
  };

  const clearCompleted = () => {
    allTodos.value = allTodos.value.filter((todo) => !todo.completed);
    console.log('clear completed');
  };

  const itemsLeft = computed(() => {
    return allTodos.value.filter((todo) => !todo.completed).length > 0
      ? `${allTodos.value.filter((todo) => !todo.completed).length} items left`
      : `All done!`;
  });

  const todos = computed<Todo[]>(() => {
    switch (view.value.value) {
      case 'all':
        return allTodos.value;
      case 'active':
        return activeTodos.value;
      case 'completed':
        return completedTodos.value;
    }
  });

  const setView = (value: 'all' | 'active' | 'completed') => {
    view.value = { value };
  };
</script>

<style scoped></style>
