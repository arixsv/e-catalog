import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Katalog from '../views/Katalog.vue'
import DestiDetail from '../views/DestiDetail.vue'
import Pesanan from '../views/Pesanan.vue'
import BerhasilCheckout from '../views/BerhasilCheckout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/katalog',
    name: 'Katalog',
    component: Katalog
  },
  {
    path: '/destinasi/:id',
    name: 'DestiDetail',
    component: DestiDetail
  },
  {
    path: '/pesanan',
    name: 'Pesanan',
    component: Pesanan
  },
  {
    path: '/berhasil-checkout',
    name: 'BerhasilCheckout',
    component: BerhasilCheckout
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
