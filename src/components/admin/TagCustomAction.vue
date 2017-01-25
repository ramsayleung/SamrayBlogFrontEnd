<template>
  <div class="custom-actions">
    <button class="btn btn-info btn-sm" @click="viewAction('view-item',rowData,rowIndex)"><i class="glyphicon glyphicon-zoom-in"></i></button>
    <button class="btn btn-warning btn-sm" @click="editAction('edit-item', rowData, rowIndex)"><i class="glyphicon glyphicon-pencil"></i></button>
    <button class="btn btn-danger btn-sm" @click="deleteAction('delete-item', rowData, rowIndex)"><i class="glyphicon glyphicon-remove"></i></button>
    <modal :show="showModal" :createAtDisabled="createAtDisabled" :disabled="disabled" :name="name" :createAt="createAt" :updateAt="updateAt" @close="showModal=false" ></modal>
  </div>	
  </template>
<!-- template for the NewPostModal component -->

<script>
  import Vue from 'vue'
import VueSweetAlert from 'vue-sweetalert'
const setting=require('../../bootstrap.js')
import axios from 'axios'
import Modal from './TagModal'
Vue.component('modal',Modal)
export default{
  data() {return{
    showModal: false,
    name:'this is name',
    createAt:'',
    updateAt:'',
    disabled:false,
    createAtDisabled:false
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
      this.name=data.name;
      this.createAt=data.createAt;
      this.updateAt=data.updateAt;
    },
    viewAction(action, data, index){
      let vm=this;
      vm.showModal=true;
      vm.disabled=true
      vm.createAtDisabled=true
      console.log('custom-actions: ' + action, data.name, index,data.createAt)
      let dateFormat=require('dateformat');
      vm.name=data.name;
      vm.createAt=dateFormat(new Date(data.createAt))
      vm.updateAt=dateFormat(new Date(data.updateAt))
    },
    editAction(action, data, index){
      let vm=this;
      let dateFormat=require('dateformat');
      vm.showModal=true;
      vm.disabled=false
      vm.createAtDisabled=true
      console.log('custom-actions: ' + action, data.name, index,data.createAt)
      vm.name=data.name;
      vm.createAt=dateFormat(new Date(data.createAt))
      vm.updateAt=dateFormat(new Date(data.updateAt))
    },
    deleteAction(action,data,index){
      let vm=this;
      axios({
        method: 'delete',
        url: setting.requestUrl+'/admin/tag/'+data.id,
        headers: {
          'content-type': 'application/json'
        }
      }).then(function(response){
        if(response.data.status==="success"){
          vm.$swal("Delete Successfully", "You Have Deleted Successfully!", "success")
          vm.$parent.refresh()
        }else{
          vm.$swal("Delete Failure", "You Cannot Delete ,Please Try it Later!", "error")
        }
      }).catch(function(error){
        console.log(error)
      });
     console.log("delete"+data.id) 
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
