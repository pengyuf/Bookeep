import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/home' },

    { path: '/home', name: 'home', meta: { title: '首页', showBack: false }, component: () => import('@/views/home/index.vue') },
    { path: '/home/addData', name: 'addData', meta: { title: '添加交易', showBack: true }, component: () => import('@/views/home/addData.vue') },
    { path: '/account', name: 'account', meta: { title: '账户', showBack: false }, component: () => import('@/views/account/index.vue') },
    { path: '/chart', name: 'chart', meta: { title: '统计', showBack: false }, component: () => import('@/views/chart/index.vue') },
    { path: '/myself', name: 'myself', meta: { title: '我的', showBack: false }, component: () => import('@/views/myself/index.vue') },

    { path: '/:pathMatch(.*)', name: '404', meta: { title: '', showBack: false }, component: () => import('@/views/404.vue') },
]


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => {

})

export default router