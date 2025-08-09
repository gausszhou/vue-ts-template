<template>
  <div class="login-container">
    <div class="login-container-content">
      <div class="login-container-content-left">
        <img :src="LoginImg" alt="" srcset="" />
      </div>
      <div class="login-container-content-right">
        <div>
          <h2>登录</h2>
        </div>
        <el-form :model="userForm" :rules="rules" ref="formRef" size="large">
          <el-form-item label="" prop="username">
            <el-input
              v-model="userForm.username"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input v-model="userForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  type LoginParams,
  type LoginResponse,
  userService,
} from "@/api/services/user";
import { useUserStore } from "@/stores/user";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import LoginImg from "@/assets/image/login.jpg";

const router = useRouter();
const userStore = useUserStore();
const userForm = reactive({
  username: "",
  password: "",
});
const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const login = async () => {
  try {
    const params: LoginParams = {
      username: userForm.username,
      password: userForm.password,
    };
    const res = await userService.login(params);
    userStore.setUserId(res.data.userId);
    userStore.setUserName(res.data.userName);
    userStore.setUserAvatar(res.data.userAvatar);
    router.push({ name: "home" });
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #ffffff 0%, #e2edf8 100%);
  .login-container-content {
    display: flex;
    background-color: #f8f9f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 400px;
  }
  .login-container-content-left {
    img {
      width: 400px;
      height: 400px;
    }
  }
  .login-container-content-right {
    box-sizing: border-box;
    width: 400px;
    height: 400px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>

<style lang="scss">
.login-container-content {
  .el-button--primary {
    --el-button-bg-color: #005eeb;
    --el-button-hover-bg-color: #005eeb;
  }
}
</style>
