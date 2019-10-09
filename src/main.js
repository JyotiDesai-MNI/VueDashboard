import Vue from "vue";
import App from "./App.vue";
import router from "./routes/starterRouter";
// import router from './routes/router';
import store from "./Nimble/Vuex/store";
//plugins
import axios from "axios";
import DashboardPlugin from './plugins/dashboard-plugin';

Vue.config.productionTip = false;
// router setup

// plugin setup
Vue.use(DashboardPlugin);

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router
// });

new Vue({
  router,
  store,
  created() {
    axios.interceptors.response.use(
      response => response, // simply return the response
      error => {
        if (error.response.status === 401) {
          // if we catch a 401 error
          console.log("interceptors");
          //this.$store.dispatch("logout"); // force a log out
          this.$router.push({ name: "login" });
        }
        return Promise.reject(error); // reject the Promise, with the error as the reason
      }
    );
  },
  render: h => h(App)
}).$mount('#app');
