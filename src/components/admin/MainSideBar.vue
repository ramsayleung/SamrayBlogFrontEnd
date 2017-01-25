<template>
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">

    <!-- Sidebar user panel (optional) -->
    <div class="user-panel">
      <div class="pull-left image">
        <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
      </div>
      <div class="pull-left info">
        <p>Alexander Pierce</p>
        <!-- Status -->
        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
      </div>
    </div>

    <!-- search form (Optional) -->
    <form action="#" method="get" class="sidebar-form">
      <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search...">
        <span class="input-group-btn">
          <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
          </button>
        </span>
      </div>
    </form>
    <!-- /.search form -->

    <!-- Sidebar Menu -->
    <ul class="sidebar-menu">
      <li class="header">HEADER</li>
      <li>
        <router-link to="/table"><i class="fa fa-table"></i> <span>文章管理</span></router-link> 
      </li>
      <li>
        <router-link to="/post"><i class="fa fa-pencil"></i> <span>发布文章</span></router-link> 
      </li>
      <li>
        <router-link to="/tag"><i class="fa fa-tags"></i> <span>标签管理</span></router-link> 
      </li>
      <li>
        <router-link to="/editor"><i class="fa fa-tags"></i> <span>Editor</span></router-link> 
      </li>
      <li>
        <router-link to="/setting"><i class="fa fa-wrench"></i> <span>博客设置</span></router-link> 
      </li>
      <li class="treeview">
        <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="#">Link in level 2</a></li>
          <li><a href="#">Link in level 2</a></li>
        </ul>
      </li>
    </ul>
    <!-- /.sidebar-menu -->
  </section>
  </template>
<script>
</script>
