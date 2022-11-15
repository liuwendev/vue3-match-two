import { createWebHistory, createRouter } from "vue-router";

const Home = () => import('@/views/Home.vue');
const Game = () => import('@/views/Game.vue');
const Tutorial = () => import('@/views/Tutorial.vue');
const TutorialOne = () => import('@/views/tutorials/TutorialOne.vue');
const Settings = () => import('@/views/Settings.vue');
const About = () => import('@/views/About.vue');
const Rules = () => import('@/views/Rules.vue');

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/game',
        name: 'game',
        component: Game
    },
    {
        path: '/tutorial',
        name: 'tutorial',
        component: Tutorial
    },
    {
        path: '/tutorial-one',
        name: 'tutorialOne',
        component: TutorialOne
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/rules',
        name: 'rules',
        component: Rules
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
