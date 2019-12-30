import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import news from '@/components/home/news'
import API from '@/components/page/API'
import Package from '@/components/page/package'
import Help from '@/components/page/Help'
import hotAPI from '@/components/package/hot/hotAPI'
import packageAa from '@/components/package/slotA/packageAa'
import packageBa from '@/components/package/slotB/packageBa'
import packageCa from '@/components/package/slotC/packageCa'
import packageDa from '@/components/package/slotD/packageDa'
import detail from '@/components/APIdetail/detail'
import detailA from '@/components/APIdetail/packageA/detailA'
import detailB from '@/components/APIdetail/packageB/detailB'
import login from '@/components/views/login'
import register from '@/components/views/register'
import userinfo from '@/components/user/userinfo'
import personinformation from '@/components/user/personinformation'
import singleAPI from '@/components/user/singleAPI'
import packAPI from '@/components/user/packAPI'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:index,
      redirect:'/news',
      children: [
        {
          path: '/hotAPI',
          name: 'hotAPI',
          component: hotAPI
        },
        {
          path: '/news',
          name: 'news',
          component: news
        },
        {
          path: '/API',
          name: 'API',
          component: API
        },
        {
          path: '/package',
          name: 'package',
          component: Package
        },
        {
          path: '/help',
          name: 'Help',
          component: Help
        },
        {
          path: '/packageAa',
          name: 'packageAa',
          component: packageAa
        },
        {
          path: '/packageBa',
          name: 'packageBa',
          component: packageBa
        },
        {
          path: '/packageCa',
          name: 'packageCa',
          component: packageCa
        },
        {
          path: '/packageDa',
          name: 'packageDa',
          component: packageDa
        },
        {
          path: '/detail',
          name: 'detail',
          component: detail
        },
        {
          path: '/detailA',
          name: 'detailA',
          component: detailA
        },
        {
          path: '/detailB',
          name: 'detailB',
          component: detailB
        },
      ]      
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo,
      children: [
        {
          path: '/personinformation',
          name: 'personinformation',
          component: personinformation
        },
        {
          path: '/singleAPI',
          name: 'singleAPI',
          component: singleAPI
        },
        {
          path: '/packAPI',
          name: 'packAPI',
          component: packAPI
        },
      ]
    },
  ]
})
