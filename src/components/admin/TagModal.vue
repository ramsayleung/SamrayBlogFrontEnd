<template >
  <div class="modal-mask"  v-show="show" transition="modal">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h3>Tag</h3>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label class="form-label">
              标签名
              <input v-model="name" class=" form-control" :disabled="disabled">
            </label>
          </div>
          <div class="form-group">
            <label class="form-label">
              标签创建时间
              <input v-model="createAt" class="form-control" :disabled="createAtDisabled" id="datetimepicker1">
            </label>
          </div>
          <div class="form-group">
            <label class="form-label">
              标签更新时间
              <input v-model="updateAt" class="form-control" :disabled="disabled" id="datetimepicker2">
            </label>
          </div>
        </form>
      </div>
      <div class="modal-footer text-right">
        <button class="modal-default-button" @click="savePost()">
          Save
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
import 'moment/moment.js'
require('../../plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css')
require(
  '../../plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js'
)
export default{
  props: ['show','name','createAt','updateAt','disabled','createAtDisabled'],
  data: function () {
    return {
    };
  },
  methods: {
    close: function () {
      this.show = false;
    },
    savePost: function () {
      // Insert AJAX call here...
      this.$emit('close');
      console.log(this.createAt)
      console.log(this.updateAt)
    }
  },
  ready: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  },
  mounted(){
    let vm=this
    $('#datetimepicker1').datetimepicker({
      defaultDate:vm.createAt
    }),
    $('#datetimepicker2').datetimepicker({
      defaultDate:vm.updateAt
    })

  }
};
                                                                                                                                                </script>

<style>
* {
box-sizing: border-box;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
    width: 600px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.text-right {
    text-align: right;
}

.form-label {
    display: block;
    margin-bottom: 1em;
}

.form-label > .form-control {
    margin-top: 0.5em;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}

          .modal-enter, .modal-leave {
              opacity: 0;
          }

          .modal-enter .modal-container,
          .modal-leave .modal-container {
              -webkit-transform: scale(1.1);
              transform: scale(1.1);
          }

</style>
