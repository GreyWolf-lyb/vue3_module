<template>
    <tabs :tabsNav="tabsNav" @tabsChange="tabsChange">
        <template #tabsNav>
            <span >
                <el-icon><calendar /></el-icon>
                <span>Route</span>
            </span>
        </template>
        <template #tabs1>
            neiron
        </template>
        <template #tabs2>
            tabs2
        </template>
    </tabs>
</template>
<script lang="ts" setup>
import tabs from "@/components/tabs.vue"
import { Calendar } from '@element-plus/icons-vue'

const tabsNav = [
    {
        tabs_label: "tabs1",
        slotName:"tabsNav"
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

const tabsClick = (tab:any, event: Event) => {
    console.log(tab, event)
}

const tabsChange = (index: number | string) => {
    console.log(index)
}
</script>
<style>

</style>