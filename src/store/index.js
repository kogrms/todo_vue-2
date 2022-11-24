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
        this.state.loading = false;
        console.log(state);
      } else {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
          .then((response) => response.json())
          .then((json) => {
            setTimeout(() => {
              state.todos = json;
              localStorage.setItem("todos", JSON.stringify(json));
              this.state.loading = false;
              console.log(this.state);
            }, 100);
          });
      }
    },
  },
  actions: {},
  modules: {},
});
