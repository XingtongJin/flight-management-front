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

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    data() {
      var checkUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'))
        }
        const regUser = /^[a-zA-Z0-9_-]{3,16}$/
        if (regUser.test(value)) {
          return callback()
        }
        callback(new Error('用户名格式错误'))
      }
      var checkMobile = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号码不能为空'))
        }
        const regUser = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/
        if (regUser.test(value)) {
          return callback()
        }
        callback(new Error('手机号码格式错误'))
      }
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('邮箱不能为空'))
        }
        const regUser = /^([a-zA-Z0-9]+[-_]?)+@[a-zA-Z0-9]+\.[a-z]+$/
        if (regUser.test(value)) {
          return callback()
        }
        callback(new Error('邮箱格式错误'))
      }
      var checkName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('姓名不能为空'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
      }
      }
      return {
        ruleForm: {
          user: '',
          pass: '',
          checkPass: '',
          mobile: '',
          email: '',
          name: ''
        },
        rules: {
          user: [{ validator: checkUser, trigger: 'blur' }],
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
          mobile: [{ validator: checkMobile, trigger: 'blur' }],
          email: [{ validator: checkEmail, trigger: 'blur' }],
          name: [{ validator: checkName, trigger: 'blur'}]
        }
      }
    },
    methods: {
      returnForm() {
        // 返回login界面
        this.$router.push('/login')
      },
      submitForm() {
        console.log(this.user)
        this.$axios.post('/user/register', 
        {username: this.ruleForm.user, password: this.ruleForm.pass, mobile: this.ruleForm.mobile, email: this.ruleForm.email, name: this.ruleForm.name}).then(
          (response) => {
            console.log(response.body)
            this.grouplist = response.body
            alert('注册成功！')
            this.$router.push('/login')
          },
          (response) => {
            console.log(response)
            alert('出问题啦！！！')
          }
        )
      }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  background-color: #2e4e6e;
}
.zhuce {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 3px;
}
.el-form-item {
  margin-top: 30px;
  width: 400px;
}
</style>