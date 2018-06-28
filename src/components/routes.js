

import Index from '../pages/index/index';
import About from '../pages/about/index';
import Case from '../pages/case/index';


export default [
    {
        path: '/',
        name: '首页',
        component: Index,
    },
    {
        path: '/about',
        name: '关于我们',
        component: About,
    },
    {
        path: '/case',
        name: '经典案例',
        component: Case,
    },
];