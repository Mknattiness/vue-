import Vue from 'vue'
import Router from 'vue-router'

// import MovieDetail from '../components/movie/Detail'
import MovieList from '../components/movie/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MovieList
    }
  ]
})
