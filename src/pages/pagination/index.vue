<template>
    <pagination
    :total="total"
    @handleSizeChange="handleSizeChange"
    @handleCurrentChange="handleCurrentChange"
    ></pagination>
</template>
<script lang="ts" setup>
import pagination from "@/components/pagination.vue";

const total = 400;

const handleSizeChange = (val: number) => {
    console.log(val,"==========")
}

const handleCurrentChange = (val: number) => {
    console.log(val,"----------")
}

</script>