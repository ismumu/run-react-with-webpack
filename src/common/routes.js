import React from 'react';
import Loadable from 'react-loadable';


function Loading() {
    return <div>Loading...</div>;
}

export default [
    {
        path: '/',
        name: '首页',
        component: Loadable({
            loader: () => import('../pages/index/index'),
            loading: Loading,
        }),
    },
    {
        path: '/about',
        name: '关于我们',
        component: Loadable({
            loader: () => import('../pages/about/about'),
            loading: Loading,
        }),
    },
    {
        path: '/case',
        name: '经典案例',
        component: Loadable({
            loader: () => import('../pages/case/case'),
            loading: Loading,
        }),
    },
];