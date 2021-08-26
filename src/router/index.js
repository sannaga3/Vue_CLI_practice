import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'
import IssueList2 from '../views/IssueList2.vue'
import TodoIssues from '../views/TodoIssues.vue'
import Tasks from '../views/Tasks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
  {
    path: '/issue-list2',
    name: 'IssueList2',
    component: IssueList2
  },
  {
    path: '/todo-issues',
    name: 'todo-issues',
    component: TodoIssues
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
