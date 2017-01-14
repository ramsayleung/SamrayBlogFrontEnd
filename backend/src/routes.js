import VueRouter from 'vue-router';
import Table from './components/Table';
// import App from './App';
let routes = [{
  path: '/post',
  component: Table
}];
export default new VueRouter({
  routes
});
