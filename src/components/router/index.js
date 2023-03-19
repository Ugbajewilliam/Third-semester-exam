import { createRouter, createWebHistory } from 'vue-router'
import CounterApp from '../Views/CounterApp.vue'
import NotFound from '../Views/NotFound.vue'
import HomePage from '../Views/HomePage'

const routes = [

{
path: '/',
name: 'HomePage',
component: HomePage
},

  {
    path: '/counter',
    name: 'CounterApp',
    component: CounterApp
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound,
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
