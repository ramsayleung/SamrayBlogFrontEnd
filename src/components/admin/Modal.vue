<template id="new-post-modal-template">
  <div class="modal-mask"  v-show="show" transition="modal">
    <div class="modal-container" @click.stop>
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
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
export default{
  props: ['show'],
  data: function () {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    close: function () {
      this.show = false;
      console.log(this.title),
      console.log(this.body)
    },
    savePost: function () {
      // Insert AJAX call here...
      this.$emit('close');
      console.log(this.title),
      console.log(this.body)
      
    }
  },
  ready: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
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
                                      width: 300px;
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
