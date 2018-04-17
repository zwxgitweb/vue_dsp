import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

let router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  let isLogin = checkLoginStatus();
  if (to.name == 'login') {
    next();
  } else {
    if (isLogin) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  }
})

function checkLoginStatus () {
  let token = localStorage.getItem('token');
  return !!token;
}

export default router;