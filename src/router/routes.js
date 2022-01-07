
const routes = [
  {
    path: '/',
    component: () => import('components/BoostedHeader'),
  },

  {
    path: '/shop',
    component: () => import('components/Shop')
  },

  {
    path: '/cart',
    component: () => import('components/Cart')
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
