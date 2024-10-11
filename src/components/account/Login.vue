<template>
  <div class="login_container">
    <div class="login_box">
      <!--Form area-->
      <el-form :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm">
        <!--username-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="username" clearable></el-input>
        </el-form-item>
        <!--password-->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" placeholder="password" show-password clearable></el-input>
        </el-form-item>
        <!--buttons-->
        <el-form-item class="btns">
          <br/>
          <el-button type="primary" @click="login">login</el-button>
          <el-button type="primary" @click="register">register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data (){
      return {
        loginForm: {
          // The binding object of the logon form data
          username: 'admin',
          password: '123456'
        },
        loginFormRules: {
          // Verify that the username is valid
          username: [
            { required: true, message: 'Please enter your username', trigger: 'blur' },
            { min: 3, max: 15, message: 'The length is 3 to 15 characters', trigger: 'blur' }
          ],
          // Verify that the password is valid
          password: [
            { required: true, message: 'Please enter your password', trigger: 'blur' },
            { min: 3, max: 15, message: 'The length is 3 to 15 characters', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // Click the login button to go to homepage
    login() { 
      console.log(this.loginForm.username)
      this.$axios.post("/user/login", {
        "username": this.loginForm.username,
        "password": this.loginForm.password
    }).then((response) => {
        console.log("token: " + response.data)
        console.log("status: " + response.status)
        console.log(this)
        if (response.status === 200 && response.data != null && response.data.code != 500) {
            localStorage.setItem('token', JSON.stringify(response.data))
            this.$router.push('/')
        } else {
          Message({
              message: 'username or password wrong!',
              type: 'warning',
            })
        }
        
      }).catch((error)=>{
          console.log(error)
      })
    },
    // go to the registration page
    register() { 
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2e4e6e;
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  .login_form {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
  }
  .btns {
    display: flex;
    justify-content: center;
  }
}
</style>