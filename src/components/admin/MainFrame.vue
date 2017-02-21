<template>
    <div class="wrapper">

        <!-- Main Header -->
        <header class="main-header">

            <!-- Logo -->
            <a href="index2.html" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>A</b>LT</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>Samray</b>Blog</span>
            </a>

            <!-- Header Navbar -->
            <header-navbar></header-navbar>
            <!-- Header Navbar End-->
        </header>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">

            <main-sidebar></main-sidebar>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <content-header></content-header>
            <!-- Main content -->
            <router-view></router-view>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Main Footer -->
        <my-footer content="Do whatever you want" time="2016" company="Samray" ></my-footer>
        <!-- Main Footer End-->
        <!-- Control Sidebar -->
        <control-sidebar></control-sidebar>
        <!-- /.control-sidebar -->
        <!-- Add the sidebar's background. This div must be placed
             immediately after the control sidebar -->
        <div class="control-sidebar-bg"></div>
    </div>
    <!-- ./wrapper -->
  </template>

<script>
 import HeaderNavBar from '../admin/HeaderNavBar.vue'
 import MainSideBar from '../admin/MainSideBar.vue'
 import ContentHeader from '../admin/ContentHeader.vue'
 import Footer from '../admin/Footer.vue'
 import ControlSideBar from '../admin/ControllSideBar.vue'
 export default {
   name: 'app',
   components: {
     'header-navbar': HeaderNavBar,
     'main-sidebar': MainSideBar,
     'content-header': ContentHeader,
     'my-footer': Footer,
     'control-sidebar': ControlSideBar
   },
   mounted() {
     require('../../plugins/jquery/dist/jquery.min.js');
     require('../../dist/js/app.min.js');
     require('../../dist/css/AdminLTE.min.css');
     require('../../dist/css/skins/skin-blue.min.css');
   }
 }

  </script>

<style>


  </style>
