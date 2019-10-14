import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Repo from './views/Repo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:username',
      name: 'user',
      component: User
    },
    {
      path: '/repo/:username/:name',
      name: 'repo',
      component: Repo
    }
  ]
})
