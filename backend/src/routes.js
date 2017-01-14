import VueRouter from 'vue-router';
import Table from './components/Table';
let routes = [{
  path: '/post',
  component: Table
}];
export default new VueRouter({
  routes
});
