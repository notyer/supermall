import Vue from "vue"
import VueRouter from 'vue-router'

//按需加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

//1.安装插件
Vue.use(VueRouter)
//2.创建router实例
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  //设置改变路径的方式为html5的history模式，默认为hash模式
  mode:'history',

})

//3.导出
export default router
