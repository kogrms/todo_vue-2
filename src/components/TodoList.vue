<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:rm-todo="rmTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    rmTodo(id) {
      this.$emit("rm-todo", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
