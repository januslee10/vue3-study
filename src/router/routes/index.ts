import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@views/home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@views/Login/index.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/panel',
    name: 'panel',
    component: () =>
      import(/* webpackChunkName: "panel" */ '@views/panel/index.vue'),
    meta: {
      title: 'Panel',
    },
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () =>
      import(/* webpackChunkName: "panel" */ '@views/reactive.vue'),
    meta: {
      title: 'Reactive',
    },
  },
  {
    path: '/style',
    name: 'style',
    component: () => import(/* webpackChunkName: "home" */ '@views/styles.vue'),
    meta: {
      title: 'Style',
    },
  },
  /**
   * 子路由示例
   */
  {
    path: '/foo',
    name: 'foo',
    component: () =>
      import(/* webpackChunkName: "foo" */ '@cp/TransferStation.vue'),
    meta: {
      title: 'Foo',
    },
    redirect: {
      name: 'bar',
    },
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () =>
          import(/* webpackChunkName: "bar" */ '@views/foo/bar.vue'),
        meta: {
          title: 'Bar',
        },
      },
    ],
  },
]

export default routes
