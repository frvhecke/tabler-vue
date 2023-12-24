import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/layout/horizontal',
    name: 'Horizontal Layout',
    component: () => import('../views/layout/LayoutHorizontal.vue')
  },
  {
    path: '/layout/combined',
    name: 'Combined Layout',
    component: () => import('../views/layout/LayoutCombined.vue')
  },
  {
    path: '/layout/vertical',
    name: 'Vertical Layout',
    component: () => import('../views/layout/LayoutVertical.vue')
  },
  {
    path: '/layout/vertical-transparent',
    name: 'Vertical Transparent Layout',
    component: () => import('../views/layout/LayoutVerticalTransparent.vue')
  },
  {
    path: '/layout/navbar-dark',
    name: 'NavBar Dark Layout',
    component: () => import('../views/layout/LayoutNavBarDark.vue')
  },
  {
    path: '/interface/accordion',
    name: 'Accordion',
    component: () => import('../views/interface/AccordionPage.vue')
  },
  {
    path: '/interface/buttons',
    name: 'Buttons',
    component: () => import('../views/interface/ButtonsPage.vue')
  },
  {
    path: '/interface/cards',
    name: 'Cards',
    component: () => import('../views/interface/CardsPage.vue')
  },
  {
    path: '/interface/colors',
    name: 'Colors',
    component: () => import('../views/interface/ColorsPage.vue')
  },
  {
    path: '/interface/form',
    name: 'Form Elements',
    component: () => import('../views/interface/FormPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
