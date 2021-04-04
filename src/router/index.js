import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeLink from '../components/HomeLink.vue'
import HelloWorld from '../components/HelloWorld.vue'
import NavLink from '../components/NavLink'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/link',
    name: 'HomeLink',
    component: HomeLink
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: "/nav",
    name: "NavLink",
    component: NavLink 
  }
]

const router = new VueRouter({
  routes
})

export default router
