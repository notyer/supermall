/**
 * axios 基本使用测试文件
 */
import axios from "axios";
//
/*
axios({
  url:'http://123.207.32.32:8000/home/multidata'
  //method:'post'或者'get'/'delete'/'request'/'head'/'put'/'patch'等
}).then(res => {
  console.log(res)
})
axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
})
*/

//axios发送并发请求
/*
axios.all([
  axios({url:'http://123.207.32.32:8000/home/multidata'}),
  axios({
    url:'http://123.207.32.32:8000/home/data',
    params:{
      type:'sell',
      page: 5
    }
  })
]).then(res => {
  console.log(res);
})
*/
//axios的全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//axios发送并发请求,获取结果的第二种方法
/*
axios.all([
  axios({url:'/home/multidata'}),
  axios({
    url:'/home/data',
    params:{
      type:'sell',
      page: 5
    }
  }),
  axios({
    url:'/category'
  })
]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))
*/
//axios的实例和模块化封装(每个实例对象可以有自己的baseURL)

const instance1 = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})
const instance2 = axios.create({
  baseURL:'http://123.207.32.32:8000/subcategory',
  timeout:10000
})
instance2({}).then(res => {
  console.log(res);
})

instance1({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
})

instance1({
  url:'/home/data',
  params:{
    type:'pop',
    page:1
  }
}).then(res => {
  console.log(res);
})

/*
const instance = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})
//axios拦截器(全局拦截和实例拦截)
axios.interceptors
*/
