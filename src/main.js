import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Component from './packages/index';
import store from "./store";
import './theme/index.scss';
import '../public/static/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.use(Component);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
