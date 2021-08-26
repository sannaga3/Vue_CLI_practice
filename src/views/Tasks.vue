<template>
 <div>
    <h1>taskリスト</h1>
    <el-button type="success" @click="getTasks()">task取得</el-button>
    <el-row :gutter="12">
      <el-col :span="24"  v-for="task in tasks.data" :key="task.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0">
          <div class="clearfix">
            <div>{{task.title}}</div>
            <div>{{task.description}}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
   </div>
</template>

<script>
  import axios from 'axios'
  const HTTP = axios.create({
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json',
    },
  })
  const URL_DATA = 'http://localhost:3000/api/v1/tasks/'
  export default {
    name: 'Tasks',
    data () {
      return {
        tasks: []
      }
    },
    methods: {
      getTasks() {
        return HTTP.get(URL_DATA,
          {
            status: 'open',
          },
        )
        .then((res) => {
          this.tasks = res.data
        })
      }
    }
  }
</script>