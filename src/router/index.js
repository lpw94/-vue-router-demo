import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Home from '@/components/Home'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/news', component:News},
    {path:'/home', component :Home},
    {path:'/hello', component :Hello},
    {path:'/',redirect:'home'}
  ]
})