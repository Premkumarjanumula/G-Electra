import { createRouter, createWebHistory } from 'vue-router'

import Landing from '../views/Landing.vue'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'
import Media from '../views/Media.vue'
import Achievements from '../views/Achievements.vue'
import Domains from '../views/Domains.vue'
import Calendar from '../views/Calendar.vue'
import Registrations from '../views/Registrations.vue'
import Auth from '../views/Auth.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/home', component: Home },
  { path: '/community', component: Community },
  { path: '/media', component: Media },
  { path: '/achievements', component: Achievements },
  { path: '/domains', component: Domains },
  { path: '/calendar', component: Calendar },
  { path: '/registrations', component: Registrations },
  { path: '/auth', component: Auth },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
