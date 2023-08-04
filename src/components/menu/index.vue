<template>
    <el-menu 
        active-text-color="#ffd04b" 
        background-color="#79bbff" 
        text-color="#fff" 
        :default-active="active.path"
        popper-effect="light" 
        class="el-menu-vertical-demo" 
        :collapse-transition="true" 
        :collapse="isCollapse"
        @select="handleSelect" 
        router>
        <menuItem v-for="item in menuList" :key="item.path" :item="item"></menuItem>
    </el-menu>
</template>

<script lang="ts" setup>
import menuItem from './menu-item';

type Props = {
    menuList: any,
    isCollapse: boolean,
}
defineProps<Props>();

import { useStore } from 'vuex';
const store = useStore();
const active = store.state.breadcrumbPath[store.state.breadcrumbPath.length - 1];
const handleSelect = (key: string, keyPath: string[]) => {
    store.dispatch('increment', keyPath)
}
</script>

<style  lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu-item-group__title {
    display: none;
}
</style>
