<template>
    <table></table>
</template>
<script lang="ts" setup>
import table from "@/components/table/index.vue"

const tableData = {
    header: [
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
    ],
    data: [
        {
            name1: "name1",
            name2: "name2",
            name3: "name3",
            name4: "name4",
            name5: "name5",
            name6: "name6",
        }
    ]
}
// const tableData = {
//     header: [
//         {
//             label: '时间',
//             prop: 'time',
//             width: '100'
//         },
//         {
//             label: '姓名',
//             prop: 'name',
//             width: '100'
//         },
//         {
//             label: '性别',
//             prop: 'sex',
//             width: '100'
//         }
//     ],
//     data: [
//         {
//             time: "2023/07/18",
//             name: "张三",
//             sex:"男",
//         },
//     ],
//     operate: {
//         label: '操作',
//         event:[]
//     }
// }
</script>