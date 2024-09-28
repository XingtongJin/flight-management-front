<template>
    <div class="box">
      <div class="zhuce">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="username" prop="user">
            <el-input v-model="ruleForm.user" clearable></el-input>
          </el-form-item>
          <el-form-item label="password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" clearable></el-input>
          </el-form-item>
          <el-form-item label="check password" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" clearable></el-input>
          </el-form-item>
          <el-form-item label="mobile" prop="mobile">
            <el-input v-model="ruleForm.mobile" clearable></el-input>
          </el-form-item>
          <el-form-item label="email" prop="email">
            <el-input v-model="ruleForm.email" clearable></el-input>
          </el-form-item>
          <el-form-item label="name" prop="name">
            <el-input v-model="ruleForm.name" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">sign up</el-button>
            <el-button @click="returnForm">cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>