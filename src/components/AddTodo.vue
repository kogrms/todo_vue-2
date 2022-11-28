<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Enter task here" />
    <button type="submit">Add task</button>
  </form>
</template>

<script>
// import store from "../store/index";
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          // id: store.state.todos.length + 1,
          // id: store.state.todos[store.state.todos.length - 1].id + 1,
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 0;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

input {
  width: 70vw;
}

button {
  width: calc(30vw - 35px);
}
</style>
