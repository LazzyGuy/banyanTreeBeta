import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Signup from '@/components/signup'
import Homefront from '../components/dashboard/homefront'
import ClassRoom from '../components/dashboard/classroom'
import Gang from '../components/dashboard/gang'
import TeachZone from '../components/dashboard/teachzone'
import myprofile from '../components/profileview/myprofile'
import welcome from '../components/profileview/welcome'
import otherprofile from '../components/profileview/otherprofile'
import change from '../components/profileview/change'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/home',  
      name: 'dashhome',
      component: Homefront
    },
    {
      path: '/classroom',  
      name: 'classroom',
      component: ClassRoom
    },
    {
      path: '/gang',  
      name: 'gang',
      component: Gang
    },
    {
      path: '/teachzone',  
      name: 'teachzone',
      component: TeachZone
    },
    {
      path: '/me',
      name: 'myprofile',
      component: myprofile  
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/profileview',
      name: 'otherprofile',
      component: otherprofile
    },
    {
      path: '/settings',
      name: 'change',
      component: change
    }
  ]
})
