<template>
    <!-- 多级表头 -->
    <template v-if="tableHeader.children">
        <el-table-column :label="tableHeader.label" :width="tableHeader.width? tableHeader.width:'no'">    
            <column v-for="(item,index) in tableHeader.children" :tableHeader="item" :key="index" :width="item.width"></column>    
        </el-table-column>
    </template>
    <!-- 普通列表 -->
    <template v-else>
        <el-table-column 
        :prop="tableHeader.prop" 
        :label="tableHeader.label" 
        :width="tableHeader.width? tableHeader.width:'no'">
            <!-- 按钮 -->
            <template v-if="tableHeader.type" #default="{ row }">
                <el-button 
                v-for="(k, i) in tableHeader.type" 
                :key="i" link 
                :type="k.type" 
                :size="k.size" 
                :icon="k.icon" 
                @click="k.event(row)"
                >{{ row[tableHeader.prop] }}</el-button>
            </template>
            <!-- html -->
            <template v-else-if="tableHeader.formtter" #default="{ row }">
                <div v-html="tableHeader.formtter(row)"></div>
            </template>
            <!-- image -->
            <template v-else-if="tableHeader.image" #default>
                <img :src="tableHeader.image.src" alt="" :width="tableHeader.image.width" :height="tableHeader.image.height">
            </template>
            <!-- 插槽 -->
            <template v-else-if="tableHeader.template?true:false" v-slot="{row}">
                <slot :row="row" :name="tableHeader.prop"></slot>
            </template>
            <!-- 默认 -->
            <template v-else #default="{ row }">
                {{ row[tableHeader.prop] }}
            </template>
        </el-table-column>
    </template>
    
</template>

<script lang="ts" setup>
type Props = {
    tableHeader: any,
    width:string|undefined
}
defineProps<Props>();

</script>