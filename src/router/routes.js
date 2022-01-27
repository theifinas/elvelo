const routes = [
  {
    path: '/',
    component: () => import('pages/Main'),
    children: [
      {
        path: '',
        component: () => import('components/Home')
      },
      {
        path: 'catalog',
        component: () => import('components/Shop')
      },

      {
        path: 'catalog/item/:id',
        component: () => import('components/ProductInfo')
      },
      {
        path: 'product6',
        component: () => import('components/Product6')
      },
      {
        path: 'cart',
        component: () => import('components/Cart')
      },
      {
        path: 'shipping',
        component: () => import('components/Shipping')
      },
      {
        path: 'info',
        component: () => import('components/Info')
      }
    ]
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
