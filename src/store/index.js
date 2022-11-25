import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    loading: true,
  },
  getters: {},
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("todos")) {
        state.todos = JSON.parse(localStorage.getItem("todos"));
        state.loading = false;
        // console.log(state);
      } else {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
          .then((response) => response.json())
          .then((json) => {
            setTimeout(() => {
              state.todos = json;
              localStorage.setItem("todos", JSON.stringify(json));
              this.state.loading = false;
              // console.log(this.state);
            }, 100);
          });
      }
    },
    rmTodo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    addTodo(state, todo) {
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeTodoStatus(state, id) {
      for (let i = 0; i < state.todos.length; i++) {
        // console.log(state.todos[i].id);
        if (state.todos[i].id === id) {
          // console.log(i);
          Vue.set(state.todos[i], "completed", !state.todos[i].completed);
          // console.log(i);
        }
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {},
  modules: {},
});
