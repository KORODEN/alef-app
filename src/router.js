import { createRouter, createWebHistory} from 'vue-router'
import Form from '@/views/Form'
import Preview from "@/views/Preview"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/form', component: Form, alias: '/'},
        { path: '/preview', component: Preview, meta: {notCompleted: true}},
        { path: '/:notFound(.*)', redirect: '/form'}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    if(to.meta.notCompleted) {
        next('/form')
    } else {
        next()
    }
})

export default router
