import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'vueApp',
        entry: '//localhost:82',
        container: '#container',
        activeRule: '/app-vue',
    },
    {
        name: 'vueApp2',
        entry: '//localhost:83',
        container: '#container',
        activeRule: '/app-vue2',
    },
]);
// 启动 qiankun
start();
