import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import 'sweetalert/dist/sweetalert.min.js';

require('./plugins/slimScroll/jquery.slimscroll.min.js');
Vue.use(VueResource);

import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';

Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination);
Vue.use(VueRouter);
var requestUrl = "http://localhost:8000";
module.exports = {
  Vue: Vue,
  requestUrl: requestUrl
};
