<template>
    <el-menu active-text-color="#ffd04b" background-color="#79bbff" text-color="#fff" :default-active="active.path"
        popper-effect="light" class="el-menu-vertical-demo" :collapse-transition="true" :collapse="isCollapse"
        @select="handleSelect" router>
        <!-- 一级 -->
        <template v-for="item in menuList" :key="item.path">
            <!-- 一级子菜单 -->
            <el-sub-menu v-if="item.children" :index="item.path" :disabled="item.disabled">
                <template #title>
                    <el-icon v-if="item.menu.icon">
                        <component :is="item.menu.icon" />
                    </el-icon>
                    <span>{{ item.menu.title }}</span>
                </template>
                <!-- 二级 -->
                <template v-for="childrenItem in item.children" :key="childrenItem.path">
                    <!-- 二级子菜单 -->
                    <template v-if="childrenItem.children">
                        <el-sub-menu :index="childrenItem.path">
                            <template #title>
                                <el-icon v-if="childrenItem.menu.icon">
                                    <component :is="childrenItem.menu.icon"/>
                                </el-icon>
                                <span>{{ childrenItem.menu.title }}</span>
                            </template>
                            <el-menu-item v-for="itemsKey in childrenItem.children"  :disabled="itemsKey.disabled" :key="itemsKey.path"
                                    :index="itemsKey.path">
                                    <el-icon v-if="itemsKey.menu.icon">
                                            <component :is="itemsKey.menu.icon" />
                                        </el-icon>
                                    {{ itemsKey.menu.title }}
                                </el-menu-item>  
                        </el-sub-menu>
                    </template>
                    <!-- 二级路由导航 -->
                    <el-menu-item-group v-else>
                        <el-menu-item :index="childrenItem.path" :disabled="childrenItem.menu.disabled">
                            <el-icon v-if="childrenItem.menu.icon">
                                <component :is="childrenItem.menu.icon" />
                            </el-icon>
                            {{ childrenItem.menu.title }}
                        </el-menu-item>
                    </el-menu-item-group>
                </template>
            </el-sub-menu>
            <!-- 一级路由导航 -->
            <el-menu-item v-else :index="item.path" :disabled="item.menu.disabled">
                <el-icon v-if="item.menu.icon">
                    <component :is="item.menu.icon" />
                </el-icon>
                <template #title>{{ item.menu.title }}</template>
            </el-menu-item>
        </template>
    </el-menu>
</template>
    
<script lang="ts" setup>
import { ref, watch } from 'vue'


type Props = {
    menuList: any,
    isCollapse:boolean,
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
    