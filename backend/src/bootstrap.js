import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueResource from 'vue-resource';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'sweetalert/dist/sweetalert.min.j';
require('./plugins/slimScroll/jquery.slimscroll.min.js');

Vue.use(VueResource);

import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';

Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination);
Vue.use(VueRouter);
window.axios = axios;
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

module.exports=Vue;
