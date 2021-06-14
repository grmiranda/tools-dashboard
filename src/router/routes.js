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
  {
    path: '/test',
    component: () => import('@/components/layouts/InvoicePdf.vue'),
    children: [
      {
        path: '',
        name: 'TestingInvoicePdf',
        component: () => import('@/components/InvoicePdfContent.vue'),
      },
    ],
  },
]

export default routes
