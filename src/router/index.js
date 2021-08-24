import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
