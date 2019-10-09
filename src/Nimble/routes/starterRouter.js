import Vue from 'vue';
import Router from 'vue-router';
// import DashboardLayout from '../Nimble/Starter/SampleLayout.vue';
// import Starter from '../views/Starter/SamplePage.vue';
import Sample from '../Starter/Sample.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/sample',
      component: Sample,
      children: [
        {
          path: 'sample',
          name: 'sample',
          components: { default: Starter }
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
