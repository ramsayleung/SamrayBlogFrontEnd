import VueRouter from 'vue-router';
import App from './App';
let routes = [{
  path: '/',
  component:  require('./components/Hello.vue')
}];
export default new VueRouter({
  routes
});
