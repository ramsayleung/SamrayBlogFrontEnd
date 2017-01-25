<template>
  <div class="custom-actions">
    <button class="btn btn-info btn-sm" @click="showModal = true" ><i class="glyphicon glyphicon-zoom-in"></i></button>
    <button class="btn btn-warning btn-sm" @click="itemAction('edit-item', rowData, rowIndex)"><i class="glyphicon glyphicon-pencil"></i></button>
    <button class="btn btn-danger btn-sm" @click="itemAction('delete-item', rowData, rowIndex)"><i class="glyphicon glyphicon-remove"></i></button>
    <new-post-modal :show="showModal" @close="showModal=false" ></new-post-modal>
  </div>	
  </template>
<script>
  import Vue from 'vue'
import NewPostModal from './Modal'
Vue.component('NewPostModal',NewPostModal)
export default {
  data() {return{
    showModal: false
  }
         },
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    itemAction (action, data, index) {
      console.log('custom-actions: ' + action, data.name, index,data.createAt)
    }
  }
}
                        </script>

<style>
.custom-actions btn.ui.button {
                            padding: 1px 8px;
                        }
                        .custom-actions button.ui.button > i.icon {
                            margin: auto !important;
                        }
                                      </style>
