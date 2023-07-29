<template>
    <el-table 
    :data="tableData" 
    :border="tableConfig.border? tableConfig.border:false"
    :size="tableConfig.size? tableConfig.size:''" 
    :height="tableConfig.height? tableConfig.height:'no'"
    style="width: 100%"  
    @selection-change="handleSelectionChange"
    @current-change="handleSelectionChange">
        <!-- 序列号 -->
        <el-table-column v-if="tableConfig.type" :type="tableConfig.type" :label="tableConfig.label" :width="tableConfig.width">
            <!-- 类型expand时显示展开内容 -->
            <template v-if="tableConfig.type === 'expand'" #default="scope">
                <slot name="expand" v-bind="scope"></slot>
            </template>
        </el-table-column>
        <!-- 内容 -->
        <template v-for="(item, index) in tableHeader" :key="index">
            <column :tableHeader="item" :width="item.width">
                <template v-slot:[item.prop]="{row}">
                    <slot :row="row" :name="item.prop"></slot>
                </template>   
            </column>
        </template>
        <!-- 操作 -->
        <el-table-column v-if="tableOperate" fixed="right" :label="tableOperate.label" :width="tableOperate.width">
          <template #default="scope">
            <el-button 
            v-for="(item,index) in tableOperate.event" 
            :key="index" 
            :link="item.link" 
            :type="item.type" 
            :size="item.size"
            :icon="item.icon" 
            @click="item.click(scope.row)"
            >{{ item.label }}</el-button>
          </template>
        </el-table-column>
    </el-table>
</template>
<script lang="ts" setup>
import column from "@/components/table/column.vue"

type Props = {
    tableHeader: any,
    tableData: any,
    tableOperate?: any,
    tableConfig: any
}
defineProps<Props>();

const emit = defineEmits(['handleSelectionChange'])
const handleSelectionChange = (row: any) => {
    emit("handleSelectionChange", row);
}


</script>