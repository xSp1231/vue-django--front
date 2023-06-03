import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store'
import dataV from '@jiaminghi/data-view'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts  //定义为全局变量

Vue.use(dataV)
//全局设置路由守卫
//登录页面跳转逻辑
//导航守卫 具体可见router文档
// router.beforeEach((to, from, next) => {//to是当前页面要跳转的对象 from是当前路由对象
//  //const token=Cookie.get("token")//通过名字获取当前的tooken  与提交按钮那里相互照应
//    const jwttoken=localStorage.getItem('jwtToken')
//    const decodedToken = jwt_decode(jwttoken);
//   if(!jwttoken&&to.name!=='login'){//如果jwttooken不存在 并且我要到达的页面name不是login
//       next({name:'login'})//跳转到名字为login的登陆页面
//   }
//   else if(jwttoken&&to.name==='login'){
//     next('/home')
//   }
//   else{
//     next();
//   }
// })

import axios from 'axios'

router.beforeEach((to, from, next) => {
  axios.get("http://127.0.0.1:8000/judge/", {
    headers: {
      'Authorization': localStorage.getItem('jwtToken')//network那里可以看见headers
    }
  }).then(response => {
    console.log("路由导航--当前角色", response.data.character)
    const role = response.data.character;//校验失败返回null（如果为null 那么说明token无效 或者不存在）   成功返回 user  admin
    //重点 必须以next结尾 防止死循环
    // if(role=='null'){
    //   if(to.name!='login'){
    //     next('/login')
    //   }else{
    //     next()
    //   }
    // }
    if (to.matched.some(record => record.meta.requiresAuth)) {//判断当前导航的路由是否需要权限验证
      console.log("当前路由需要验证")
      if (role == "admin") {
        next()
      } else {
        alert('只有管理员允许访问');
        next('/register');
      }
    }
    else {
      next();
    }
  })
    .catch(error => {
      console.log(error);
      next(false);
    });
});























//jwttoken方法：

// router.beforeEach((to, from, next) => {
//   const jwttoken = localStorage.getItem('jwtToken');
//   if (jwttoken) {
//     const decodedToken = jwt_decode(jwttoken);
//     const currentTime = Date.now() / 1000;
//     if (decodedToken.exp < currentTime) {
//       next('/login');// 如果JWT token已过期，则跳转到登录页面
//     }
//     else if (to.meta.roles && !to.meta.roles.includes(decodedToken.role)) {
//       // 如果当前用户的角色不允许访问该页面，则跳转到403页面
//       next('/aboutme');
//     }
//     else {
//       // 如果当前用户有权限访问该页面，则继续跳转
//       next();
//     }
//   }
//   else {
//     // 如果没有JWT token，则跳转到登录页面
//       next('/login');
//   }
// });








Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  store,//挂载
  router,
  render: h => h(App),
}).$mount('#app') ///挂载到根组件上面
