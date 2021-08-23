<template>
  <div>
    <h1>Todoリスト</h1>
    <form @submit.prevent="addTodo()">
      <input v-model="todo">
    </form>
    <ul>
      <li v-for="( todo, index ) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">完了</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = '';
    },
    removeTodo(index){
      this.todos.splice(index, 1); //--1
    }
  }
}
</script>