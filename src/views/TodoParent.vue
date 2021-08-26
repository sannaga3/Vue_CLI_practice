<template>
  <div>
    <h1>Todoリスト</h1>
    <form @submit.prevent="addTodo()">
      <el-input placeholder="Please input todo" v-model="todo"></el-input>
    </form>
    <el-row :gutter="36">
      <el-col :span="24">
        <TodoItem v-for="( todo, index ) in todos" :key="index" v-bind:todo="todo"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
    return {
      todo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      console.log(this.todo);
      this.todo = '';
      console.log(this.todos);
    },
    removeTodo(index){
      this.todos.splice(index, 1);
    }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>