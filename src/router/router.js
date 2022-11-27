import Exchange from '@/pages/CurrencyExchange.vue'
import Converter from '@/pages/CurrencyConverter.vue'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router);

const routes = [
    {
        path:'/',
        component: Converter
    },
    {
        path:'/converter',
        component: Converter
    },
    {
        path:'/exchange',
        component: Exchange
    }
];

export default new Router(
    {
        routes,
        mode:'history'
    }
);

