import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Details from '../views/Details.vue'
import Exports from '../views/Exports.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/exports',
    name: 'Exports',
    component: Exports
  },
  {
    path: '*',
    redirect: '/',
    component: Users,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
