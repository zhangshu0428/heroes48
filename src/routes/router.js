import VueRouter from 'vue-router';
import Vue from 'vue';
//导入路由的各个组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';

Vue.use(VueRouter);

//创建路由对象

var router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        {path: '/',redirect: '/heroes'},
        {name: 'heroes', path: '/heroes', component: HeroesList},
        {name: 'equips', path: '/equips', component: EquipsList},
        {name: 'weapons', path: '/weapons', component: WeaponsList}

    ]
})

//导出路由
export default router;
