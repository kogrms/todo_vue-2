<!-- eslint-disable vue/no-mutating-props -->
<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        v-on:change="changeTodoStatus(todo.id)"
      />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="btn-rm" v-on:click="$emit('rm-todo', todo.id)">
      &times;
    </button>
  </li>
</template>

<script>
import store from "@/store";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  methods: {
    changeTodoStatus(id) {
      console.log(typeof id);
      store.commit("changeTodoStatus", id);
      // console.log(e.target.id);
    },
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  border: none;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 2vw;
  line-height: 2vw;
}

span {
  display: flex;
  align-items: flex-end;
}

strong {
  margin: 0;
  padding: 0;
  margin-right: 5px;
}

input {
  margin: 0;
  padding: 0;
  margin-right: 10px;
  width: 2vw;
  height: 2vw;
}

.btn-rm {
  border: none;
  border-radius: 10px;
  color: white;
  background-color: red;
  height: 19px;
  width: 19px;
}

.done {
  text-decoration: line-through;
}
</style>
