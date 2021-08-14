import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: './login',
    },
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          redirect: '/about',
        },
        {
          path: '/about',
          component: './about',
        },
        {
          path: '/market',
          component: './market',
        },
      ],
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
})
