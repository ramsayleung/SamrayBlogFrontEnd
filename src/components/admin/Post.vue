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
                <label for="inputEmail3" class="col-sm-2 control-label">Title</label>

                <div class="col-sm-9">
                  <input type="text" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>

                <div class="col-sm-9">
                  <input type="password" class=" form-control" id="inputPassword3" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">CreateAt</label>
                <div class=" col-sm-9">
                  <div class='input-group date' id='datetimepicker1'>
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                    <input type='text' class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">UpdateAt</label>
                <div class=" col-sm-9">
                  <div class='input-group date' id='datetimepicker2'>
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                    <input type='text' class="form-control" />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <!-- /.box-body -->
        <!-- </div> -->

        <div class="form-group">
          <div class="col-sm-offset-8 col-sm-2">
            <button type="submit" class="btn btn-success">Submit</button>
            <button type="submit" class="btn btn-warning">Cancel</button>
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
  import 'moment/moment.js'
require('../../plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css')
require(
  '../../plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js'
)
export default{

  mounted(){
    $('#datetimepicker1').datetimepicker({
      locale:'zh-cn'
    }),
    $('#datetimepicker2').datetimepicker({
      locale:'zh-cn'
    })

  }
}</script>

