const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/program',
      name: 'program',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProgramView.vue')
    },
    {
      path: '/om',
      name: 'om',
      component: () => import('../views/OmFestivalView.vue')
    },
    {
      path: '/billet',
      name: 'billet',
      component: () => import('../views/BilletInformationView.vue')
    }
  ]
})

export default router