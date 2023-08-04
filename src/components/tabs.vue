<template>
    <el-tabs 
    :type="tabsConfig.type" 
    :tabPosition="tabsConfig.tabPosition"
    :stretch="tabsConfig.stretch" 
    v-model="activeName"
    class="demo-tabs" 
    @tab-change="handleChange"
    @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in tabsNav" :key="index" :label="item.tabs_label" :name="index">
            <template v-if="item.slotName" #label>
                <slot :name="item.slotName"></slot>
            </template>
            <slot :name="item.tabs_label"></slot>
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref(0)

const emit = defineEmits(['tabsClick','tabsChange'])

const handleClick = (tab: TabsPaneContext, event: Event) => {
    emit('tabsClick', tab, event)
}

const handleChange = (index: number | string) => {
    emit('tabsChange', index)
}

const tabsConfig = {
    type: 'border-card',//card border-card 风格类型
    tabPosition: 'top',//top right bottom left 选项卡所在位置
    stretch: false,//标签的宽度是否自撑开
}

type Props ={
    tabsNav:any
}
defineProps<Props>();
</script>
<style></style>