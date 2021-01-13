import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'
import Login from '@/components/RegisterComponents/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'FirstPart',
          component: FirstPart
        },
        {
          path: 'SecondPart',
          name: 'SecondPart',
          component: SecondPart
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    },
  //  下面的登录界面相关页面
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }

  ]
})
