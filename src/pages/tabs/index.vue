<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane 
        v-for="(item,index) in tabsNav" 
        :key="index" 
        :label="item.tabs_label" 
        :name="index">
            {{ item.tabs_label }}
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref(0)

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

const tabsConfig = {
    type: '',//card border-card 风格类型
    tabPosition: '',//top right bottom left 选项卡所在位置
    closable: false,//标签是否可关闭
    addable: false,//标签是否可增加
    editable: false,//标签是否同时可增加和关闭
    stretch:false,//标签的宽度是否自撑开
}

const tabsNav = [
    {
        tabs_label:"tabs1"
    },
    {
        tabs_label: "tabs2"
    },
    {
        tabs_label: "tabs3"
    },
    {
        tabs_label: "tabs4"
    }
]
</script>
<style>

</style>