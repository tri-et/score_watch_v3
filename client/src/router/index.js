import Vue from 'vue'
import Router from 'vue-router'
import predictions from '@/components/predictions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'predictions',
      component: predictions
    }
  ]
})
