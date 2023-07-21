<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <div class="login-text">
        vue3 + element-plus + ts
        <hr />
        组件库2次封装调用
      </div>
    </el-col>
    <el-col :span="8">
      <div class="login-from">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm(ruleFormRef)"
              @keyup.enter="subEnter($event)"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { login } from "@/api/login";
const router = useRouter();
const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请填写密码"));
  } else {
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请填写账号"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  password: "",
  username: "",
});

const rules = reactive<FormRules>({
  password: [{ validator: validatePass, trigger: "blur" }],
  username: [{ validator: validatePass2, trigger: "blur" }],
});

const submitForm:any = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      const { password, username } = ruleForm;

      // login({ password, username }).then((res) => {
      //   if (res === "") {
      //     localStorage.setItem('token', password + username);
      //     router.push('/home');
      //   } else {
      //     // erroe
      //   }
      // });

      localStorage.setItem('token',password+username);
      router.push('/home');
      
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const subEnter = (e: any) => {
  if (e.keyCode === 13) {
    submitForm(ruleFormRef.value);
  }
};

onMounted(() => {
  window.addEventListener("keyup", subEnter);
});

onUnmounted(() => {
  window.removeEventListener("keyup", subEnter, false);
});
</script>
<style lang="scss" scoped>
.el-row {
  margin-right: 0 !important;
  height: 100%;
  background: $header-background-color;
  color: $font-color-white;
}
.login-text {
  @include w_h_size;
  text-align: center;
  color: $font-color-white;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-from {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .demo-ruleForm {
    width: 80%;
    height: 50%;
    border: 1px solid $border-color-white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 50px;
    box-sizing: border-box;
    background-color: rgba($color: #fff, $alpha: 0.5);
  }
}
</style>
