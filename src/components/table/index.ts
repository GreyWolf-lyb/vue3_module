const tableConfig = {
    border:true,//是否带有纵向边框
    size:'',//large / default /small ,table尺寸
    type: '',//  'index'|'selection'|'expand', 是否添加选项 选项为expand需要添加插槽
    label: '序列',//选项标题
    width: '70', //选项宽度
    height:'',//固定表头添加高度
}
// 具名插槽 template 为true时才会管用
// <template #sex="{row}">
//     <el-button type="primary">{{ row.sex }}</el-button>
// </template>
// 具名插槽 type 为expand时才会管用
// <template #expand="{ row }">
//     <p>{{ row.time }}</p>
//     <p>{{ row.name }}</p>
//     <p>{{ row.sex }}</p>
// </template>

// 表头配置
// const tableHeader = [
//     {
//         label: '时间',
//         prop: 'time',
//         width: '180',
//     },
//     {
//         label: '姓名',
//         prop: 'name',
//         width: '180',
//     },
//     {
//         label: '性别',
//         prop: 'sex',
//         width: '',
//     }
// ]
// 多级表头
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

// 列表配置项 image type formtter 不可同时使用
// const tableHeader = [
//     {
//         label: '时间',
//         prop: 'time',
//         width: '180',
//         template:true, //具名插槽 prop
//         image: {
//             src: require("@/assets/image/vue.jpeg"),
//             width: "20",
//             height:"20"
//         },
//         type: [//列表某项添加事件
//             {
//                 type: "primary",
//                 size: "small",
//                 label: "name",
//                 // icon: Edit,
//                 event: (row: any) => {
//                     console.log(row)
//                 },
//             },
//         ],
//         formtter: (row: any) => { //
//             return `<span>HTML模板</span>`
//         }
//     },
// ]

// 列表操作
// const tableOperate = {
//     label: '操作',
//     width:"",
//     event: [
//         {
//             // link:"link",
//             type: "primary",
//             size:"small",
//             label: "编辑",
//             // icon:Edit,
//             click: (row:any) => {
//                 console.log(row)
//             }
//         }
//     ]
// }

// (单选|多选)选中项
// const handleSelectionChange = (row: any) => {
//     console.log(row)
// }

export default tableConfig;