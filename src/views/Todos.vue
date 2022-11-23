<template>
  <div>
    <h2>Todo list</h2>
    <router-link to="/">Home</router-link>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @rm-todo="rmTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import LoaderEllipsis from "@/components/LoaderEllipsis.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter((t) => t.completed);
      }
      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.completed);
      }
      return this.todos;
    },
  },
  methods: {
    rmTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader: LoaderEllipsis,
  },
};
</script>

<style>
hr {
  margin-top: 10px;
  margin-bottom: 15px;
}

select {
  margin: 0;
  padding: 0;
}
</style>
