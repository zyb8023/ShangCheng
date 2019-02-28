
import VFooter from '../components/VFooter'

export default [
  {
    path: '/home', components: {
      default: () => import(/* webpackChunkName: "group-home" */ '@/pages/Home'),
      footer: VFooter
    }
  },
  // {
  //   path: '/collect', component: {
  //     default: () => import(/* webpackChunkName: "group-home" */ '@/pages/Collect')
  //   }
  // },
  {
    path: '/kind', components: {
      default: () => import(/* webpackChunkName: "group-home" */ '@/pages/Kind'),
      footer: VFooter
    }
  },
  {
    path: '/user', components: {
      default: () => import(/* webpackChunkName: "group-user" */ '@/pages/User'),
      footer: VFooter
    }
  },
  {
    path: '/reg', components: {
      default: () => import(/* webpackChunkName: "group-user" */ '@/pages/Reg'),
    }
  },
  {
    path: '/cart', components: {
      default: () => import(/* webpackChunkName: "group-home" */ '@/pages/Cart')
    }
  },
  {
    path: '/detail/:id', name: 'detail', props: { default: true }, components: {
      default: () => import(/* webpackChunkName: "group-detail" */ '@/pages/Detail')
    }
  },
  {
    path: '/login', components: {
      default: () => import(/* webpackChunkName: "group-user" */ '@/pages/Login')
    }
  },
  { path: '/', redirect: '/home' },
  {
    path: '*', components: {
      default: () => import(/* webpackChunkName: "group-home" */ '@/pages/Error'),
      footer: VFooter
    }
  }
]
