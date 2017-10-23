import Login from '@/components/Login'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Table from '@/components/Table'

let routes = [
  {
    path: '/login',
    name: '',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'el-icon-message', // 图标样式class
    children: [
      { path: '/main', component: Main, name: '主页', hidden: true },
      { path: '/table', component: Table, name: 'Table' }
    ]
  }
]

export default routes
