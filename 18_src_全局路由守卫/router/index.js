//该文件用于创建应用路由器
import VueRouter from 'vue-router'
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,

        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true}
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            // props:{a:1,b:"hello"}
                            props: true
                        }
                    ]
                }
            ]
        },
    ]
})

//全局前置路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'wenlingSchool') {
            next()
        } else {
            alert('学校名不对，无权限查看')
        }
    } else {
        next()
    }

})

//后置路由
router.afterEach((to, from) => {

})

export default router