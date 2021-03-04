// import Recommend from '../views/Recommend/Recommend'

export default  [
    {
      path: "/", 
      name: "Recommend",
      component: () =>
      import("../views/Recommend/Recommend"),
      exact:true
    },
    {
        path: "/rank",
        name: "Rank",
        component: () =>
          import( "../views/Rank/Rank"),
      },
      
      {
        path: "/singer",
        name: "Singer",
        component: () =>
          import( "../views/Singer/Singer")
      },
      {
        path: "/song",
        name: "Song",
        component: () =>
          import("../views/Song/Song")
      },
      {
        path:'/',
        redirect:'/'
      }

  ];