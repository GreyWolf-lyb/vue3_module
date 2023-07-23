<template>
    <my-table
    :tableData="tableData"
    :tableHeader="tableHeader"
    :tableOperate="tableOperate"
    :tableConfig="tableConfig"
    @handleSelectionChange="handleSelectionChange"
    >
    </my-table>
</template>
<script lang="ts" setup>
import myTable from "@/components/table/index.vue"
import { Edit } from '@element-plus/icons-vue'
import  tableConfig from '@/components/table/index';

const tableHeader = [
    {
        label: '时间',
        prop: 'time',
        width: '180',
    },
    {
        label: '姓名',
        prop: 'name',
        width: '180',
    },
    {
        label: '性别',
        prop: 'sex',
        width: '',
    }
]


    
const tableData = [
    {
        time: "2023/07/18",
        name: "张三1",
        sex: "男",
    },
    {
        time: "2023/07/18",
        name: "张三2",
        sex: "女",
    },
]
const tableOperate = {
    label: '操作',
    width:"",
    event: [
        {
            link:"link",
            type: "primary",
            size:"small",
            label: "编辑",
            click: (row:any) => {
                console.log(row)
            }
        }
    ]
}

// 选中项
const handleSelectionChange = (row: any) => {
    console.log(row)
}
</script>