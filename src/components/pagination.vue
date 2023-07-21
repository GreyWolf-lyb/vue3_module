<template>
    <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="pageSizes"
          :small="small"
          :disabled="disabled"
          :background="background"
          :pager-count="pagerCount"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :hide-on-single-page="value"
          :prev-text="prevText"
          :next-text="nextText"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />

</template>
<script lang="ts" setup>
import { ref } from 'vue'

type Props = {
    total: number, //总条数
}
defineProps<Props>();

const prevText = "" //上一页 传参数显示文字不传显示图标

const nextText ="" //下一页

const pagerCount = ref(9) //页数多时显示省略号位置 (参数为5-20中的基数不然会警告)

const currentPage = ref(1) //默认选中页

const pageSize = ref(10) //默认每页条数

const pageSizes = [10,20,30,40] // 每页显示条数设置项

const small = ref(false) //按钮大小

const background = ref(true) //按钮是否添加背景

const disabled = ref(false) //是否禁用整个分页

const value = ref(true) //只有一页是是否隐藏分页

const emit = defineEmits(['handleSizeChange','handleCurrentChange'])

const handleSizeChange = (val: number) => {
    emit("handleSizeChange", val);
}
const handleCurrentChange = (val: number) => {
    emit("handleCurrentChange", val);
}
</script>