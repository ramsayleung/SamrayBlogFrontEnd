<template>
  <div>
    <router-view></router-view>
  </div>
  </template>

<script>
import Navbar from './components/frontend/NavBar.vue'
import Slideshow from './components/frontend/SlideShow.vue'
import 'font-awesome/css/font-awesome.min.css';
import Tag from './components/frontend/Tag.vue';
require('./css/w3.css')

export default {
  name: 'app',
  components: {
    "navbar":Navbar,
    "slide-show":Slideshow,
    "blog-tag":Tag
  },methods:{
  },mounted(){
    // When the user clicks anywhere outside of the modal, close it
    }
  }
  </script>

<style>
body {
      font-family: "Lato", sans-serif
  }

  .mySlides {
      display: none
  }

  </style>

