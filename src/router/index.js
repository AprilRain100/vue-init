import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 路由懒加载
const aboutUs = resolve => {
  import('@/page/aboutUs').then(module => {
    resolve(module)
  })
};
const home = resolve => {
  import('@/page/home').then(module => {
    resolve(module)
  })
};
export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
