const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/layouts/BlankLayout.vue'),
    children: [
      {
        path: '',
        name: 'about-1',
        component: () => import('@/pages/About.vue'),
      },
    ],
  },
]

export default routes
