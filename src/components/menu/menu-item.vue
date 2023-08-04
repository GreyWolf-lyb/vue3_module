<template>
    <!-- 有子节点 -->
    <el-sub-menu v-if="item.children" :index="item.path" :disabled="item.disabled">
        <template #title>
            <el-icon v-if="item.menu.icon">
                <component :is="item.menu.icon" />
            </el-icon>
            <span>{{ item.menu.title }}</span>
        </template>
        <!-- 递归渲染 -->
        <menu-item v-for="sub in item.children" :key="sub.path" :item="sub"></menu-item>
    </el-sub-menu>
    <!-- 没有子菜单 -->
    <el-menu-item v-else :index="item.path" :disabled="item.menu.disabled">
        <el-icon v-if="item.menu.icon">
            <component :is="item.menu.icon" />
        </el-icon>
        <template #title>{{ item.menu.title }}</template>
    </el-menu-item>
</template>

<script lang="ts" setup>

defineProps({
    item: {
        type: Object,
        required: true
    },
})

</script>

<style scoped lang="scss"></style>