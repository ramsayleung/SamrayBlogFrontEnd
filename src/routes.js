import VueRouter from 'vue-router';
import Table from './components/admin/Table';
import Post from './components/admin/Post';
import Editor from './components/admin/Editor.vue';
import Tag from './components/admin/Tag.vue';
import Setting from './components/admin/Setting.vue';
import DetailedPost from './components/frontend/Post.vue';
import Home from './components/frontend/Home.vue';
let routes = [{
  path: '/table',
  component: Table
}, {
  path: '/post',
  component: Post
}, {
  path: '/editor',
  component: Editor
}, {
  path: '/tag',
  component: Tag
}, {
  path: '/setting',
  component: Setting
}, {
  path: '/detailedpost',
  component: DetailedPost
}, {
  path: '/home',
  component: Home
}];
export default new VueRouter({
  routes
});
