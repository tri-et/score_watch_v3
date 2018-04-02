import Vue from 'vue'
import Router from 'vue-router'
import predictions from '@/components/predictions'
import livescores from '@/components/livescore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'predictions',
      component: predictions
    },
    {
      path: '/livescore',
      name: 'livescores',
      component: livescores
    }
  ]
})
