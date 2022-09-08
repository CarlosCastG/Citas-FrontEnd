import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {publicPath} from '../../vue.config'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(publicPath),
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0, left: 0}
    }
  },
})

export default router
