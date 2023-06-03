import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import area from '../views/Area.vue'
import team from '../views/Team.vue'
import main from '../views/Main.vue'
import review from '../views/Review.vue'
import login from '../views/Login.vue'
import axios from '../views/Axiostest.vue'
import person from '@/views/person.vue'
import djangoapi from '../views/djangoapi.vue'
import register  from '../views/register.vue'
import aboutme from '../views/aboutMe.vue'
Vue.use(VueRouter)
const routes = [
    {//引入登录页面 <!---之前设置的测试页面---->
        path: '/axios',
        name: 'axios',
        component: axios,
    },
    {//引入登录页面
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/',//main页面 在app.vue里面渲染
        component: main,
        redirect: '/home',//重定向 从'/'跳转到'/home'
        children: [
            {
                // 当 /home匹配成功，
                // home页面的内容会被渲染在 main的 <router-view> 中
                path: 'home',
                 name: 'home', component: home,
            },
            {
                path: 'area', name: 'area', component: area
            },
            {
                path: 'review', name: 'review', component: review
            },
            {
                path: 'team', name: 'team', component: team
            },
            {
                path: 'person', name: 'person', component: person
            },
            {
                path: 'djangoapi', name: 'djangoapi', component: djangoapi,
                meta: {
                    requiresAuth: true
                  }

            },
            {
                path: 'register', name: 'register', component: register
            },
            {
                path: 'aboutme', name: 'aboutme', component: aboutme
            },

        ]
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({ //////////////// /////////// router实例
    routes: routes // (缩写) 相当于 routes: routes
})

export default router  //导出 全局引用