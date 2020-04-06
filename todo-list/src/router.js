import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import TasksPage from './components/pages/TasksPage';
import TaskDetailsPage from './components/pages/TaskDetailsPage';
import EditTaskPage from './components/pages/EditTaskPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksPage,
    },
    {
      path: '/task/:id',
      name: 'task-details',
      component: TaskDetailsPage,
    },
    {
      path: '/task/edit/:id',
      name: 'edit-task',
      component: EditTaskPage,
    },
  ],
});
