<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in store.state.breadcrumbPath" :key="item.path" :to="{path:item.path}">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { watch, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
// 监听vuex newValue新数据 oldValue旧数据
store.watch(state => state.breadcrumbPath, (newValue, oldValue) => { })

</script>