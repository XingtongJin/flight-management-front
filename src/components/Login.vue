<template>
    <div class="login_container">
      <div class="login_box">
        <!--表单提交区域-->
        <el-form :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm">
          <!--用户名-->
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="username" clearable></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" placeholder="password" show-password clearable></el-input>
          </el-form-item>
          <!--按钮区-->
          <el-form-item class="btns">
            <el-checkbox class="remember" v-model="keepPassword">记住密码</el-checkbox>
            <br/>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="register">注册</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>