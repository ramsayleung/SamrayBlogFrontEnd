import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
require('./bootstrap/js/bootstrap.min.js');

Vue.use(VueRouter);
window.axios = axios;
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

module.exports=Vue;
