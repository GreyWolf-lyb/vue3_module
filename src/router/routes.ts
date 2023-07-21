import pages from '@/router/pages';

const routes = [
    { name: 'layout', path: '/layout', children: pages, component: () => import('@/pages/layout/index.vue'), },
    { path: '/',redirect:'/login' },
    { name: 'login', path: '/login', component: () => import('@/login/index.vue') },
    { name: 'notfound', path: '/notfound', component: () => import('@/pages/notfound/index.vue') },
    { path: '/:pathMatch(.*)*',redirect:'notfound' },
]

export default routes;