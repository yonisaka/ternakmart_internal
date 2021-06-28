import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"

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
      path: "/register_page",
      name: "register_page",
      component: () => import("@/views/RegisterPage"),
    },
    {
      path: "/register_dokter",
      name: "register_dokter",
      component: () => import("@/views/RegisterDokter"),
    },
    {
      path: "/register_penjual",
      name: "register_penjual",
      component: () => import("@/views/RegisterPenjual"),
    },
    {
      path: '/',
      name: 'dashboard',
      components: {
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
      path: '/monitoring',
      name: 'monitoring',
      components: {
        header: AppHeader,
        default: () => import("@/views/Index"),
        footer: AppFooter,
      },
      children: [
        {
          path: 'transaksi',
          component: () => import("@/views/monitoring/transaksi/Index")
        },
        {
          path: 'payment',
          component: () => import("@/views/monitoring/payment/Index")
        },
        {
          path: 'pengiriman',
          component: () => import("@/views/monitoring/pengiriman/Index")
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
        header: AppHeader,
        default: () => import("@/views/Index"),
        footer: AppFooter,
      },
      children: [
        {
          path: 'admin',
          component: () => import("@/views/user/admin/Index")
        },
        {
          path: 'admin/form',
          component: () => import("@/views/user/admin/Form")
        },
        {
          path: 'admin/form/:id',
          component: () => import("@/views/user/admin/Form")
        },
        {
          path: 'dokter',
          component: () => import("@/views/user/dokter/Index")
        },
        {
          path: 'dokter/form',
          component: () => import("@/views/user/dokter/Form")
        },
        {
          path: 'dokter/form/:id',
          component: () => import("@/views/user/dokter/Form")
        },
        {
          path: 'penjual',
          component: () => import("@/views/user/penjual/Index")
        },
        {
          path: 'penjual/form',
          component: () => import("@/views/user/penjual/Form")
        },
        {
          path: 'penjual/form/:id',
          component: () => import("@/views/user/penjual/Form")
        },
        {
          path: 'customer',
          component: () => import("@/views/user/customer/Index")
        },
        {
          path: 'customer/form',
          component: () => import("@/views/user/customer/Form")
        },
        {
          path: 'customer/form/:id',
          component: () => import("@/views/user/customer/Form")
        },
      ],
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/setting',
      name: 'setting',
      components: {
        header: AppHeader,
        default: () => import("@/views/Index"),
        footer: AppFooter,
      },
      children: [
        {
          path: 'menu',
          component: () => import("@/views/setting/menu/Index")
        },
        {
          path: 'role',
          component: () => import("@/views/setting/role/Index")
        },
        {
          path: 'role/list/:id',
          component: () => import("@/views/setting/role/List")
        },
      ],
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/data',
      name: 'data',
      components: {
        header: AppHeader,
        default: () => import("@/views/Index"),
        footer: AppFooter,
      },
      children: [
        {
          path: 'golongan',
          component: () => import("@/views/data/golongan/Index")
        },
        {
          path: 'jenis',
          component: () => import("@/views/data/jenis/Index")
        },
      ],
      meta: {
        requiresAuth: true
      },
    },
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
