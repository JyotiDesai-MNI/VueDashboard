import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../views/Starter/SampleLayout.vue';
import Starter from '../views/Starter/SamplePage.vue';
import Login from '../views/Pages/Login.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/DashboardLayout',
      name: 'home',
      redirect: '/DashboardLayout',
      component: DashboardLayout,
      children: [
        {
          path: 'DashboardLayout',
          name: 'DashboardLayout',
          components: { default: Starter }
        },
        {
          path: '/',
          name: 'Login',
          components: { default: Login }
        }
      ]
    }

  ],
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
