<template>
  <div>
    <h1>Todoリスト</h1>
    <form @submit.prevent="addTodo()">
      <el-input placeholder="Please input todo" v-model="todo"></el-input>
    </form>
    <el-row :gutter="36">
      <el-col :span="6"  v-for="( todo, index ) in todos" :key="index">
        <el-card class="box-card bg-purple-light" shadow="hover" style="margin: 5px 0;">
          {{ todo }}
          <el-button type="danger" style="margin-left: 30px;" icon="el-icon-delete" circle @click="removeTodo(index)"></el-button>
        </el-card>
      </el-col>
    </el-row>
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