import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DataBindingList from '../views/DataBindingList';
import Nested from '../views/NestedComponent';
import Component from '../views/ParentComponent';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/databindinglist',
		name: 'DataBindingList',
		component: DataBindingList,
	},
	{
		path: '/nested',
		name: '/Nested',
		component: Nested,
	},
	{
		path: '/component',
		name: '/Component',
		component: Component,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
