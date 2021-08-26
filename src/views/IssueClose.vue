<template>
  <div>
    <h1>repo-close-new-task6</h1>
    <el-button type="success" @click="getIssues()">issue取得</el-button>
    <el-row :gutter="36">
      <el-col :span="24"  v-for="( issue, index ) in issues" :key="index">
        <el-card class="box-card bg-purple-light" shadow="hover" style="margin: 5px 0;">
          issue番号 :{{ index }}
          <br>
          タイトル :{{ issue.title }}
          <br>
          内容: {{ issue.body }}
          <el-button @click="closeIssue(issue.number)" type="success" icon="el-icon-check" circle></el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
const client = axios.create({
  baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
    'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
  },
})
export default {
  name: 'IssueList',
  data() {
    return {
      issues: []
    }
  },
  methods: {
    getIssues() {
      client.get('/issues')
        .then((res) => {
          this.issues = res.data
      })
    },
    closeIssue(number){
      client.patch(`/issues/${number}`,
                    {
                      state: 'closed'
                    },
                  )
      .then(() => {
                    this.issues.some((v, i) => {
                      if(v.number == number) this.issues.splice(i, 1);
                    })
                  }
           )
    },
  }
}
</script>