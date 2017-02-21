<template>
  <div>
  <!-- Navbar -->
  <div class="w3-top">
    <ul class="w3-navbar w3-black w3-card-2 w3-left-align">
      <li class="w3-hide-medium w3-hide-large w3-opennav w3-right">
        <a class="w3-padding-large" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
      </li>
      <li><a href="#" class="w3-hover-none w3-hover-text-grey w3-padding-large">HOME</a></li>
      <li class="w3-hide-small"><a href="#band" class="w3-padding-large">BAND</a></li>
      <li class="w3-hide-small"><a href="#tour" class="w3-padding-large">TOUR</a></li>
      <li class="w3-hide-small"><a href="#contact" class="w3-padding-large">CONTACT</a></li>
      <li class="w3-hide-small w3-dropdown-hover">
        <a href="javascript:void(0)" class="w3-hover-none w3-padding-large" title="More">MORE <i class="fa fa-caret-down"></i></a>
        <div class="w3-dropdown-content w3-white w3-card-4">
          <a href="#">Merchandise</a>
          <a href="#">Extras</a>
          <a href="#">Media</a>
        </div>
      </li>
      <li class="w3-hide-small w3-right"><a href="javascript:void(0)" class="w3-padding-large w3-hover-red"><i class="fa fa-search"></i></a></li>
    </ul>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
    <ul class="w3-navbar w3-left-align w3-black">
      <li><a class="w3-padding-large" href="#band">BAND</a></li>
      <li><a class="w3-padding-large" href="#tour">TOUR</a></li>
      <li><a class="w3-padding-large" href="#contact">CONTACT</a></li>
      <li><a class="w3-padding-large" href="#">MERCH</a></li>
    </ul>
  </div>

  <!-- Page content -->
  <div class="w3-content" style="max-width:2000px;margin-top:46px">

    <!-- Automatic Slideshow Images -->
    <div class="mySlides w3-display-container w3-center">
      <img src="http://www.w3schools.com/w3images/la.jpg" style="width:100%">
      <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        <h3>Los Angeles</h3>
        <p><b>We had the best time playing at Venice Beach!</b></p>
      </div>
    </div>

    <!-- The Band Section -->
    <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px"
      id="band">
      <h2 class="w3-wide">THE BAND</h2>
      <p class="w3-opacity"><i>We love music</i></p>
      <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>

  <!-- End Page Content -->
  </div>

  </div>
  </template>

<script>
import Navbar from './NavBar.vue'
import 'font-awesome/css/font-awesome.min.css';
import Tag from './Tag.vue';
require('../../css/w3.css')

export default {
  name: 'app',
  components: {
    "navbar":Navbar,
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

