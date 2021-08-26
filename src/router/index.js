import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'
import IssueClose from '../views/IssueClose.vue'
import TodoParent from '../views/TodoParent.vue'
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
    path: '/issue-Close',
    name: 'IssueClose',
    component: IssueClose
  },
  {
    path: '/todo-parent',
    name: 'todo-parent',
    component: TodoParent
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
