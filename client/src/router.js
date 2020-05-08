import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "homepage" */ './views/Home.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import(/* webpackChunkName: "upload" */ './views/Upload.vue'),
    },
    {
      path: '/files/:id',
      name: 'file-download',
      component: () => import(/* webpackChunkName: "file" */ './views/File.vue'),
    },
    {
      path: '/files/:id/delete/:code',
      name: 'file-delete',
      component: () => import(/* webpackChunkName: "file-delete" */ './views/FileDelete.vue'),
    },
    {
      path: '/cm/login',
      name: 'cm-login',
      component: () => import(/* webpackChunkName: "cm-login" */ './views/Admin/Login.vue'),
    },
    {
      path: '/cm/dashboard',
      name: 'cm-dashboard',
      component: () => import(/* webpackChunkName: "cm-dashboard" */ './views/Admin/Dashboard.vue'),
    },
    {
      path: '/ad-blocker-detected',
      name: 'ad-blocker',
      component: () => import(/* webpackChunkName: "ad-blocker-detected" */ './views/AdBlocker.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ './views/NotFound.vue'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
