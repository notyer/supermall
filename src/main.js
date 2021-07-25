import Vue from 'vue'
import App from './App.vue'
//导入router模块
import router from "./router"
//导入网络请求模块
import {request} from "network/request"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载
  router
}).$mount('#app')
/*
request({
  url:'/home/multidata'
}).then(res => {
  //JSON.stringify(res)对象转化成JSON格式
  console.log(res);
}).catch(err =>{
  console.log(err);
})
*/

//导入axios基本用法测试文件
import conn from 'network/netconn'



