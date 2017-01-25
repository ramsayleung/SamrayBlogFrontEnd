<template>
  <section class="content">
    <div class="box">
      <div class="box-header">
      </div>
      <!-- /.box-header -->
      <div class="box-body">
        <div class="container">
          <vuetable ref="vuetable"
            :api-url="url"
            :fields="fields"
            :css="css"
            pagination-path=""
            :per-page="20"
            :multi-sort="true"
            multi-sort-key="ctrl"
            :sort-order="sortOrder"
            detail-row-component="my-detail-row"
            :append-params="moreParams"
            @vuetable:cell-clicked="onCellClicked"
            @vuetable:pagination-data="onPaginationData"
          ></vuetable>
          <div>
            <vuetable-pagination-info ref="paginationInfo"
              info-class="pull-left""
            ></vuetable-pagination-info>
            <vuetable-pagination ref="pagination"
              :css="cssPagination"
              :icons="icons"
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
const setting =require('../../bootstrap.js')
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import accounting from 'accounting'
import moment from 'moment'
import Vue from 'vue'
import CustomActions from './TableCustomAction'
import VueEvents from 'vue-events'
Vue.use(VueEvents)

Vue.component('custom-actions', CustomActions)
export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
  },
  data () {
  	return {
      css: {
        tableClass: 'table table-striped table-bordered',
        loadingClass: 'loading',
        ascendingIcon: 'glyphicon glyphicon-chevron-up',
        descendingIcon: 'glyphicon glyphicon-chevron-down',
        sortHandleIcon: 'glyphicon glyphicon-menu-hamburger',
      },
      cssPagination: {
        wrapperClass: 'pagination pull-right',
        activeClass: 'btn-primary',
        disabledClass: 'disabled',
        pageClass: 'btn btn-border',
        linkClass: 'btn btn-border',
      },
      icons: {
        first: '',
        prev: '',
        next: '',
        last: '',
      },
url:setting.requestUrl+"/admin/post"
,
    fields: [
      {
        name: '__sequence',   
        title: '序号',
        titleclass: 'text-center',
        dataclass: 'text-center'
      },
      {
        name:'title',
        title:'博客标题',
        titleClass: 'text-center',
        dataClass: 'text-center',
      },
      {
        name: 'createAt',
        title:'发布时间',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'formatDate|dd-mm-yyyy'
      },
      {
        name: 'updateAt',
        title:'更新时间',
        callback: 'formatDate|dd-mm-yyyy',
        titleClass: 'text-center',
        dataClass: 'text-center',
      },
      {
        name: 'commentsEnable',
        title:'开启评论',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback:'commentEnableLabel'
      },{
        name:'enable',
        title:'状态',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback:'enableLabel'
      },
      {
        name: '__component:custom-actions',
        title: '操作',
        titleClass: 'text-center',
        dataClass: 'text-center',
      }
    ],
      sortOrder: [
        {
          field: 'email',
          sortField: 'email',
          direction: 'asc'
        }
      ],
      moreParams: {}
  	}
  },
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
    },
    onCellClicked (data, field, event) {
      console.log('cellClicked: ', field.name)
      this.$refs.vuetable.toggleDetailRow(data.id)
    },
  },
  events: {
    'filter-set' (filterText) {
      this.moreParams = {
        'filter': filterText
      }
      Vue.nextTick( () => this.$refs.vuetable.refresh())
    },
    'filter-reset' () {
      this.moreParams = {}
      this.$refs.vuetable.refresh()
      Vue.nextTick( () => this.$refs.vuetable.refresh())
    }
  }
}
                                                    </script>

<style>
.pagination {
  margin-top: 0;
}
.btn.btn-border {
  border: 1px solid;
  margin-right: 2px;
}
.vuetable-pagination-info {
  margin-top: 8px !important;
}
                                                    </style>
