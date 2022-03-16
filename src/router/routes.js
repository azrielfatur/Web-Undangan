
const routes = [
  {
    path: '/',
    component: () => import('layouts/Index.vue'),
    name: 'index-layouts'
  },
  {
    path: '/vian-eva',
    component: () => import('layouts/Index.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
