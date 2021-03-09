// import Recommend from '../views/Recommend/Recommend'

export default [
  {
    path: '/',
    name: 'Recommend',
    component: () => import('../views/Recommend/Recommend'),
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('../views/Rank/Rank'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search/Search'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/register'),
  },

  {
    path: '/playdetail',
    name: 'playdetail',
    component: () => import('../views/playdetail/playdetail'),
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('../views/Singer/Singer'),
  },
  {
    path: '/song',
    name: 'Song',
    component: () => import('../views/Song/Song'),
  },
  {
    path: '/songdetail',
    name: 'SongDetail',
    component: () => import('../views/SongDetail/SongDetail'),
  },
  {
    path: '/',
    redirect: '/',
  },
]
