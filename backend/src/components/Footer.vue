<template>
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
     {{content}} 
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; {{time}} <a href="#">{{company}}</a>.</strong> All rights reserved.
  </footer>
</template>
<script>
  export default{
  props:['content','company','time'],
  }
</script>
