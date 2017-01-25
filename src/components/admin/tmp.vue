<template>
  <section class="content">
    <div class="box">
      <div class="box-header">
      </div>
      <!-- /.box-header -->
      <div class="box-body">
        <vuetable ref="vuetable"
          api-url="http://localhost:8000/admin/post"
          :fields="fields"
          pagination-path=""
          @vuetable:pagination-data="onPaginationData"
        ></vuetable>
        <div class="vuetable-pagination ui basic segment grid">
          <vuetable-pagination-info ref="paginationInfo"
          ></vuetable-pagination-info>
          <vuetable-pagination ref="pagination"
            @vuetable-pagination:change-page="onChangePage"
          ></vuetable-pagination>
        </div>
      </div>
    </div>
    <!-- /.box-body -->
    </div>
    <!-- /.box -->
    </div>
    <!-- /.col -->
    </div>
  </section>
  </template>
<script>

import accounting from 'accounting'
import moment from 'moment'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import Vue from 'vue'
import CustomActions from './TableCustomAction'
Vue.component('custom-actions', CustomActions)
export default{

  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data(){return {
    fields: [
      {
        name: '__sequence',   
        title: '序号',
        titleclass: 'text-center',
        dataclass: 'text-center'
      },
      {
        name:'title',
        title:'博客标题'
      },
      {
        name: 'createat',
        title:'发布时间',
        titleclass: 'text-center',
        dataclass: 'text-center',
        callback: 'formatdate|dd-mm-yyyy'
      },
      {
        name: 'updateat',
        title:'更新时间',
        callback: 'formatdate|dd-mm-yyyy'
      },
      {
        name: 'commentsenable',
        title:'开启评论',
        titleclass: 'text-center',
        dataclass: 'text-center',
        callback:'commentenablelabel'
      },{
        name:'enable',
        title:'状态',
        titleclass:'text-center',
        dataclass:'text-center',
        callback:'enablelabel'
      },
      {
        name: '__component:custom-actions',
        title: '操作',
        titleclass: 'center aligned',
        dataclass: 'center aligned'
      }
    ],
    itemActions: [
      { name: 'view-item', label: '', icon: 'glyphicon glyphicon-zoom-in', class: 'btn btn-info', extra: {'title': 'View', 'data-toggle':"tooltip", 'data-placement': "left"} },
      { name: 'edit-item', label: '', icon: 'glyphicon glyphicon-pencil', class: 'btn btn-warning', extra: {title: 'Edit', 'data-toggle':"tooltip", 'data-placement': "top"} },
      { name: 'delete-item', label: '', icon: 'glyphicon glyphicon-remove', class: 'btn btn-danger', extra: {title: 'Delete', 'data-toggle':"tooltip", 'data-placement': "right" } }
    ]
  }},
  methods: {
    allcap (value) {
      return value.toUpperCase()
    },
    enableLabel (value) {
      return value ===true 
        ? '<span class="label label-success"><i class="glyphicon glyphicon-pause"></i>Enable</span>'
        : '<span class="label label-danger"><i class="glyphicon glyphicon-play"></i>Disabled</span>'
    },
    commentEnableLabel(value){
      return value===true
        ? '<span class="label label-primary"><i class="glyphicon glyphicon-ok-circle"></i>Yes</span>'
        : '<span class="label label-warning"><i class="glyphicon glyphicon-remove-circle"></i>No</span>'
    },
    formatNumber (value) {
      return accounting.formatNumber(value, 2)
    },
    formatDate (value, fmt = 'MM/DD/YYYY') {
      let dateFormat=require('dateformat');
      let date= new Date(value);
      return dateFormat(date,"dddd, mmmm dS, yyyy")
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  },
  events: {
    'vuetable:action': function(action, data) {
      console.log('vuetable:action', action, data)
      if (action == 'view-item') {
        this.viewProfile(data.id)
      }
    },
    'vuetable:load-error': function(response) {
      console.log('Load Error: ', response)
    }
  }
}
                                                                                                                               </script>

<!-- template for the Modal component -->
<script type="x/template" id="modal-template">
  <div class="modal-mask" @click="close" v-show="show" transition="modal">
    <div class="modal-container" @click.stop>
      <slot></slot>
    </div>
  </div>
</script>

<!-- template for the NewPostModal component -->
<script type="x/template" id="new-post-modal-template">
  <modal :show.sync="show" :on-close="close">
    <div class="modal-header">
      <h3>New Post</h3>
    </div>

    <div class="modal-body">
      <label class="form-label">
        Title
        <input v-model="title" class="form-control">
      </label>
      <label class="form-label">
        Body
        <textarea v-model="body" rows="5" class="form-control"></textarea>
      </label>
    </div>

    <div class="modal-footer text-right">
      <button class="modal-default-button" @click="savePost()">
        Save
      </button>
    </div>
  </modal>
</script>

<!-- app -->
<div id="app">
  <new-post-modal :show.sync="showModal"></new-post-modal>
  <button id="show-modal" @click="showModal = true">New Post</button>
</div>
<script>
  Vue.component('Modal', {
  template: '#modal-template',
  props: ['show', 'onClose'],
  methods: {
  close: function () {
  this.onClose();
  }
  },
  ready: function () {
  document.addEventListener("keydown", (e) => {
  if (this.show && e.keyCode == 27) {
  this.onClose();
  }
  });
  }
  });

  Vue.component('NewPostModal', {
  template: '#new-post-modal-template',
  props: ['show'],
  data: function () {
  return {
  title: '',
  body: ''
  };
  },
  methods: {
  close: function () {
  this.show = false;
  this.title = '';
  this.body = '';
  },
  savePost: function () {
  // Insert AJAX call here...
  this.close();
  }
  }
  });

  new Vue({
  el: '#app',
  data: {
  showModal: false
  }
  });
</script>
