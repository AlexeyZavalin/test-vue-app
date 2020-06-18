import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EstablishmentProducts from '../views/EstablishmentProducts.vue'
import Establishments from '../views/Establishments.vue'
import CategoryEstablishments from '../views/CategoryEstablishments.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/establishments',
    name: 'establishments',
    component: Establishments
  },
  {
    path: '/:establishmentSlug',
    name: 'establishment',
    component: EstablishmentProducts
  },
  {
    path: '/:categorySlug',
    name: 'category',
    component: CategoryEstablishments
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
