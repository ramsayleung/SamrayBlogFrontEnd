import VueRouter from 'vue-router';
import Table from './components/admin/Table';
import Post from './components/admin/Post';
import Editor from './components/admin/Editor.vue';
import Tag from './components/admin/Tag.vue';
import Setting from './components/admin/Setting.vue';
import DetailedPost from './components/frontend/Post.vue';
import Home from './components/frontend/Home.vue';
import Login from './components/admin/Login.vue';
import MainFraim from './components/admin/MainFrame.vue';
let routes = [{
  path: '/admin/table',
  component: Table
}, {
  path: '/admin/post',
  component: Post
}, {
  path: '/admin/editor',
  component: Editor
}, {
  path: '/admin/tag',
  component: Tag
}, {
  path: '/admin/setting',
  component: Setting
}, {
  path: '/admin/login',
  component: Login
}, {
  path: '/detailedpost',
  component: DetailedPost
}, {
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}];
export default new VueRouter({
  routes
});
