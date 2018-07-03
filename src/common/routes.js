import React from 'react';
import Loadable from 'react-loadable';


function Loading() {
    return <div>Loading...</div>;
}

export default [
    {
        path: '/',
        component: Loadable({
            loader: () => import('../pages/index/index'),
            loading: Loading,
        }),
    },
    {
        path: '/interfacedata',
        component: Loadable({
            loader: () => import('../pages/getInterfaceData/interfaceData'),
            loading: Loading,
        }),
    },
    {
        path: '/changetitle',
        component: Loadable({
            loader: () => import('../pages/case/case'),
            loading: Loading,
        }),
    },
];