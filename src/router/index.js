import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"

import AppSidebar from "@/layout/AppSidebar";
import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter"; 

import { CHECK_NAV } from "@/store/actions.type";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register"),
    },
    {
      path: '/',
      name: 'dashboard',
      components: {
        sidebar: AppSidebar,
        header: AppHeader,
        default: () => import("@/views/Dashboard"),
        footer: AppFooter,
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/modal',
      name: 'modal',
      components: {
        sidebar: AppSidebar,
        header: AppHeader,
        default: () => import("@/views/Index"),
        footer: AppFooter,
      },
      children: [
        {
          path: 'pengajuan',
          component: () => import("@/views/modal/pengajuan/Index")
        },
        {
          path: 'pengajuan/form',
          component: () => import("@/views/modal/pengajuan/Form")
        },
        {
          path: 'pengajuan/form/:id',
          component: () => import("@/views/modal/pengajuan/Form")
        },
        {
          path: 'persetujuan',
          component: () => import("@/views/modal/persetujuan/Index")
        },
        {
          path: 'persetujuan/detail/:id',
          component: () => import("@/views/modal/persetujuan/Detail")
        },
        {
          path: 'penjualan',
          component: () => import("@/views/modal/penjualan/Index")
        },
        {
          path: 'penjualan/detail/:id',
          component: () => import("@/views/modal/penjualan/Detail")
        },
      ],
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/user',
      name: 'user',
      components: {
        sidebar: AppSidebar,
        header: AppHeader,
        default: () => import("@/views/user/Index"),
        footer: AppFooter,
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let role_id = store.getters.currentUser.role_id;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isAuthenticated || store.getters.currentUser.id == null) {
      next({ name: 'login' })
    } else {
      store
          .dispatch(CHECK_NAV, { role_id })
          .then(() => next());
      // Promise.all([store.dispatch(CHECK_NAV)]).then(next)
      // next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
