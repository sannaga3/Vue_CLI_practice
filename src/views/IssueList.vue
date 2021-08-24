<template>
  <div>
    <h1>issueリスト</h1>
    <el-button type="success" @click="getIssues()">issue取得</el-button>
    <el-row :gutter="36">
      <el-col :span="24"  v-for="( issue, index ) in issues" :key="index">
        <el-card class="box-card bg-purple-light" shadow="hover" style="margin: 5px 0;">
          タイトル :{{ issue.title }}
          <br>
          内容: {{ issue.body }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'IssueList',
  data() {
    return {
      issues: []
    }
  },
  methods: {
    getIssues() {
      axios.get('https://api.github.com/repos/sannaga3/Vue_CLI_practice/issues',
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type':'application/json',
            },
          },
        )
        .then((res) => {
          this.issues = res.data
      })
    }
  }
}
</script>