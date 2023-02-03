// import { registerMicroApps, start } from 'qiankun';
import { registerMicroApps } from 'qiankun';
let navMenuArr = [
    {
        name: '/home/app1',
        entry: '//localhost:82',
        container: '#container',// 子应用的id
        activeRule: '/home/app1',
        icon:""
    },
    {
        name: '/home/app2',
        entry: '//localhost:83',
        container: '#container',// 子应用的id
        activeRule: '/home/app2',
        icon:""
    },
]
registerMicroApps(
    navMenuArr
);
export default navMenuArr
// 启动 qiankun
// start();
