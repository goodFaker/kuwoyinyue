import Recommend from '../views/Recommend/Recommend'

export default  [
    {
      path: "/", 
      name: "Recommend",
      component: Recommend
    },
    {
        path: "/rank",
        name: "Rank",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Rank/Rank")
      },
      {
        path: "/singer",
        name: "Singer",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Singer/Singer")
      },
      {
        path: "/song",
        name: "Song",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Song/Song")
      },

  ];