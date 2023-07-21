<template>
    <div class="home-page">
        <div class="menu-box">
            menu 菜单组件参数
            <jsonViewer :value="pages" copyable :expand-depth="4"></jsonViewer>
        </div>
        <div class="breadcrumb-box">
            breadcrumb 面包屑组件参数
            <jsonViewer :value="breadcrumb" copyable :expand-depth="4"></jsonViewer>
        </div>
    </div>
</template>

<script lang="ts" setup>

const pages = [
    {
        name: '/',
        path: '/layout',
        menu: {
            title: "首页",
            icon: Location,
            disabled:true
        },
        children: [
            {
                name: 'home',
                path: '/home',
                menu: {
                    title: "首页",
                },
                component: () => import('@/pages/home/inedx.vue'),
            },
            {
                name: 'table',
                path: '/table',
                menu: {
                    title: "列表分页",
                },
                children: [
                    {
                        name: 'table',
                        path: '/table',
                        menu: {
                            title: "列表",
                        },
                        component: () => import('@/pages/table/index.vue')
                    },
                    {
                        name: 'pagination ',
                        path: '/pagination',
                        menu: {
                            title: "分页",
                        },
                        component: () => import('@/pages/pagination/index.vue')
                    },
                ]
            },
        ]
    },
    {
        name: 'tree',
        path: '/tree',
        menu: {
            title: "树结构",
            // icon: Setting,
        },
        component: () => import('@/pages/tree/index.vue')
    },
]

const breadcrumb= [{ "name": "首页", "path": "/homepage" }, { "name": "首页", "path": "/home" }]

</script>

<style  lang="scss">
.home-page{
    display: flex;
}
</style>
    