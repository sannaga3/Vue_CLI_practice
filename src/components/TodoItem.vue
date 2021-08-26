<template>
  <div>
    <el-col :span="12">
      <el-card class="box-card bg-purple-light" shadow="hover" style="margin: 5px 0;">
        {{ todo }}
        <el-button type="danger" style="margin-left: 30px;" icon="el-icon-delete" circle @click="removeTodo(index)"></el-button>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo']
}
</script>