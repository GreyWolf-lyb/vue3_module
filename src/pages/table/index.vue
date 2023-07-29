<template>
    <my-table
    :tableData="tableData"
    :tableHeader="tableHeader"
    :tableOperate="tableOperate"
    :tableConfig="tableConfig"
    @handleSelectionChange="handleSelectionChange"
    >
    <!-- <template #time="{row}">
        <el-button type="primary">{{ row.time }}</el-button>
    </template> -->
    <!-- <template #expand="{ row }">
        <p>{{ row.name1 }}</p>
        <p>{{ row.name2 }}</p>
        <p>{{ row.name3 }}</p>
    </template> -->
    </my-table>
</template>
<script lang="ts" setup>
import myTable from "@/components/table/index.vue"
import { Edit } from '@element-plus/icons-vue'
import tableConfig from '@/components/table/index';

const tableHeader = [
    {
        label: '一级表头',
        prop: 'name1',
    },
    {
        label: '一级表头',
        children: [
            {
                label: '二级表头',
                prop: 'name2',
            },
            {
                label: '二级表头',
                prop: 'name3',
            },
            {
                label: '二级表头',
                children: [
                    {
                        label: '三级表头',
                        prop: 'name4',
                    },
                    {
                        label: '三级表头',
                        prop: 'name5',
                    },
                    {
                        label: '三级表头',
                        prop: 'name6',
                    },
                ]
            }
        ]
    }
];

const tableData = [
    {
        name1:"name1",
        name2:"name2",
        name3:"name3",
        name4:"name4",
        name5:"name5",
        name6:"name6"
    },
]
const tableOperate = {
    label: '操作',
    width:"70",
    event: [
        {
            link:"link",
            type: "primary",
            size:"small",
            label: "编辑",
            click: (row:any) => {
                console.log(row,"-----------")
            }
        }
    ]
}

// 选中项
const handleSelectionChange = (row: any) => {
    console.log(row)
}
</script>