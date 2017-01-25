// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

const setting = require('./bootstrap');
import router from './routes';
var Vue = setting.Vue;
import App from './App';
/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  ...App
});
