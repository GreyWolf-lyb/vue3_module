<template>
    <el-table 
    :data="tableData" 
    :border="tableConfig.border"
    :size="tableConfig.size" 
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
        <!-- 普通表格 -->
        <el-table-column 
        v-for="(item,index) in tableHeader" 
        :key="index" 
        :prop="item.prop" 
        :label="item.label" 
        :width="item.width">
            <!-- 表格中某列添加按钮 -->
            <template v-if="item.type" #default="{ row }">
                <el-button 
                v-for="(k, i) in item.type" 
                :key="i" link 
                :type="k.type" 
                :size="k.size" 
                :icon="k.icon" 
                @click="k.event(row)"
                >{{ row[item.prop] }}</el-button>
            </template>
            <!-- 添加HTML -->
            <template v-else-if="item.formtter" #default="{ row }">
                <div v-html="item.formtter(row)"></div>
            </template>
            <!-- 添加图片 -->
            <template v-else-if="item.image" #default>
                <img :src="item.image.src" alt="" :width="item.image.width" :height="item.image.height">
            </template>
            <!-- 插槽 -->
            <template v-else-if="item.template?true:false" #default="scope">
                <slot :name="item.prop" v-bind="scope"></slot>
            </template>
            <!-- 默认显示 -->
            <template v-else #default="{ row }">
                {{ row[item.prop] }}
            </template>
            
        </el-table-column>
        <!-- 操作 -->
        <el-table-column fixed="right" :label="tableOperate.label" :width="tableOperate.width">
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

type Props = {
    tableHeader: any,
    tableData: any,
    tableOperate: any,
    tableConfig:any
}
defineProps<Props>();

const emit = defineEmits(['handleSelectionChange'])
const handleSelectionChange = (row: any) => {
    emit("handleSelectionChange", row);
}

// const tableHeader = [
//     {
//         label: '一级表头',
//         prop: 'name1',
//     },
//     {
//         label: '一级表头',
//         children: [
//             {
//                 label: '二级表头',
//                 prop: 'name2',
//             },
//             {
//                 label: '二级表头',
//                 prop: 'name3',
//             },
//             {
//                 label: '二级表头',
//                 children: [
//                     {
//                         label: '三级表头',
//                         prop: 'name4',
//                     },
//                     {
//                         label: '三级表头',
//                         prop: 'name5',
//                     },
//                     {
//                         label: '三级表头',
//                         prop: 'name6',
//                     },
//                 ]
//             }
//         ]
//     }
// ];
// const tableData= [
//     {
//         name1: "name1",
//         name2: "name2",
//         name3: "name3",
//         name4: "name4",
//         name5: "name5",
//         name6: "name6",
//     }
// ]

</script>