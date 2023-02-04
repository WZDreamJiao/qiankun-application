import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'reactApp',
        entry: '//localhost:4001',
        container: '#container',
        activeRule: '/react-app',
    },
    {
        name: 'viteApp',
        entry: '//localhost:4002',
        container: '#container',
        activeRule: '/vite-app',
    },
    {
        name: 'vueApp',
        entry: '//localhost:4003',
        container: '#container',
        activeRule: '/vue-app',
    },
]);
// 启动 qiankun
start();
