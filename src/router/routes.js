const routes = [
  {
    path: '/',
    component: () => import('@/components/layouts/BlankLayout.vue'),
    children: [
      {
        path: '',
        name: 'InvoiceGenerator',
        component: () => import('@/pages/InvoiceGenerator.vue'),
      },
    ],
  },
]

export default routes
