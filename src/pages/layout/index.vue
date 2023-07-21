<template>
  <div class="layout-layout">
    <div class="menu-nav">
      <div class="title-log">
        <img src="@/assets/image/vue.jpeg" alt="">
         <span v-if="!isCollapse">vue3-module</span>
      </div>
      <Menu :menuList="pageRouter" :isCollapse="isCollapse"/>
    </div>
    <div class="layout-content">
      <div class="layout-header">
        <div class="shrink">
          <el-button link @click="menuNavSwitch(isCollapse)">
            <el-icon :size="20" > 
              <Fold v-if="isCollapse" />
              <Expand v-else/>
            </el-icon>
          </el-button>
          <breadcrumb :routerList="pageRouter"></breadcrumb>
        </div>
        <div class="user-exit">
          <el-button link  @click="outLogin"> 
            <el-icon :size="16" >
            <SwitchButton />
          </el-icon> 
          退出
        </el-button>
        </div>
      </div>
      <div class="page-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Expand, Fold, SwitchButton } from '@element-plus/icons-vue';

import Menu from "@/components/menu.vue";

import breadcrumb from "@/components/breadcrumb.vue";

import pageRouter from '@/router/pages';

import { useRouter } from 'vue-router';

import { ElMessageBox } from 'element-plus';

const isCollapse = ref(false);
const menuNavSwitch = (flag:boolean) => {
  isCollapse.value = !flag;
}
const router = useRouter();
const outLogin = () => {
  ElMessageBox.confirm(
    '您确定要退出登录吗?',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    }
  )
    .then(() => {
      localStorage.clear();
      router.push('/login');
    })
    .catch(() => {
    })
  
}

</script>

<style lang="scss">
.layout-layout{
  height: 100%;
  display: flex;
  .menu-nav{
    background-color: #79bbff;
    .title-log{
      height: $height;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $font-color-white;
      img{
        width: 26px;
        height: 26px;
        margin-right: 5px;
      }
      span{
        font-size: 20px;
        color: $font-color-white;
      }
    }
  }
  .layout-content{
    flex: 1;
    .layout-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: $height;
      padding-right: 10px;
      box-shadow: 0 0 5px 0 #E6E8EB;
      .shrink{
        display: flex;
        align-items: center;
      }
      .el-breadcrumb{
        line-height: $height;
      }
    }
    .page-content{
      padding: 10px;
      box-sizing: border-box;
    }
  }

}
</style>
