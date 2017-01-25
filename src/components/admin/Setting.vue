<template>

  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <!-- Horizontal Form -->
        <div class="box box-info">
          <div class="box-header with-border">
            <!-- <h3 class="box-title">Horizontal Form</h3> -->
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form class="form-horizontal">
            <div class="box-body">
              <div class="form-group">
                <label for="blogName" class="col-sm-2 control-label">博客名</label>

                <div class="col-sm-9">
                  <input type="text" class="form-control" id="blogName" placeholder="blogName" v-model="blogName">
                </div>
              </div>
              <div class="form-group">
                <label for="blogSlogan" class="col-sm-2 control-label">博客标语</label>

                <div class="col-sm-9">
                  <input type="text" class=" form-control" id="blogSlogan" placeholder="blogSlogan" v-model="blogSlogan">
                </div>
              </div>
              <div class="form-group">
                <label for="displayPerPageSize" class="col-sm-2 control-label">前端每页显示博文数</label>

                <div class="col-sm-9">
                  <input type="text" class=" form-control" id="displayPerPageSize" placeholder="前端每页显示博文数" v-model="displayPerPageSize">
                </div>
              </div>
              <div class="form-group">
                <label for="adminPerPageSize" class="col-sm-2 control-label">后台数据每页展示数</label>

                <div class="col-sm-9">
                  <input type="text" class=" form-control" id="adminPerPageSize" placeholder="后台数据每页展示数" v-model="adminPerPageSize">
                </div>
              </div>
            </div>
        </div>
        <!-- /.box-body -->
        <!-- </div> -->

        <div class="form-group">
          <div class="col-sm-offset-8 col-sm-2">
            <button type="submit" @click="submitData" class="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
      <!-- /.box-footer -->
          </form>
    </div>
    </div>
    </div>
  </section>

  </template>

<script type="text/javascript">
</script>
<script>
  import axios from 'axios'
import Vue from 'vue'
import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)
const setting=require('../../bootstrap.js')
export default{
  data(){
    return{
      blogName:"Samray'blog",
      blogSlogan:'Samray mumbling',
      displayPerPageSize:5,
      adminPerPageSize:9
    }
  },
  mounted(){
    var vm=this;
    axios.get(setting.requestUrl+"/admin/setting").then(function(response){
      vm.blogName=response.data.blog_name;
      vm.blogSlogan=response.data.blog_slogan;
      vm.adminPerPageSize=response.data.admin_per_page_size;
      vm.displayPerPageSize=response.data.display_per_page_size;
    }).catch(function(error){
      console.log(error)
    })
  },
  methods:{
    submitData(){
      let vm=this
      axios({
        method: 'put',
        url: setting.requestUrl+'/admin/setting',
        data: {
          blogName:vm.blogName,
          blogSlogan:vm.blogSlogan,
          adminPerPageSize:vm.adminPerPageSize,
          displayPerPageSize:vm.displayPerPageSize
        },
        headers: {
          'content-type': 'application/json'
        }
      }).then(function(response){
        if(response.data.status==="success"){
          vm.$swal("Modify Successfully", "You Have Modified Successfully!", "success")
        }else{
          vm.$swal("Modify Failure", "You Cannot Modified ,Please Try it Later!", "error")
        }
      }).catch(function(error){
        console.log(error)
      });
    }
  }

}</script>

