import VueRouter from 'vue-router';
import Vue from 'vue';
//导入路由的各个组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';

//导入英雄部分的增删改组件
import HeroAddList from '../views/heroes/heroesAdd.vue';
import HeroEditList from '../views/heroes/heroesEdit.vue';

Vue.use(VueRouter);

//创建路由对象

var router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/',redirect: '/heroes'},
        {name: 'heroes', path: '/heroes', component: HeroesList},
        {name: 'heroesAdd', path: '/heroes/add', component: HeroAddList},
        {name: 'heroesEdit', path: '/heroes/:id', component: HeroEditList,props: true},
        {name: 'equips', path: '/equips', component: EquipsList},
        {name: 'weapons', path: '/weapons', component: WeaponsList}

    ]
})

//导出路由
export default router;
