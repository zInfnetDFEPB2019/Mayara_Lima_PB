import Vue from 'vue';
import VueRouter from 'vue-router';
import TasksPage from './components/TasksPage';
import DetailPage from './components/DetailPage';
import EditTaskPage from './components/EditTaskPage';


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: TasksPage // TODO: Trocar para a home
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: TasksPage
        },
        {
            path: '/task/:id',
            name: 'task-details',
            component: DetailPage
        },
        {
            path: '/task/edit/:id',
            name: 'edit-task',
            component: EditTaskPage
        }
    ]
});
