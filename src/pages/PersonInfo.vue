<template>
    <div>
      <el-row :gutter="20" style="margin-top:10px;">
        <el-col :span="8">
            <div class="grid-content bg-purple">
                 <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>user information</span>
        </div>
          <div class="name-role">
          <span class="sender">Admin - {{dataForm.nickName}}</span>  
        </div>
        <div class="registe-info">
          <span class="registe-info">
            registeration time:
            <li class="fa fa-clock-o"></li>
             2020/4/10 9:40:33
          </span>
        </div>
        <el-divider></el-divider>
        <div class="personal-relation">
        <div class="relation-item">telphone:  <div style="float: right; padding-right:20px;">{{dataForm.phone}}</div></div>
    </div>
    <div class="personal-relation">
      <div class="relation-item">name:  <div style="float: right; padding-right:20px;">{{ dataForm.realName }}</div></div> 
    </div>
       <div class="personal-relation">
      <div class="relation-item">email:  <div style="float: right; padding-right:20px;">{{dataForm.email}}</div></div>      
    </div>
      </el-card>
        </div>
        </el-col>
    <el-col :span="16">
        <div class="grid-content bg-purple">
       <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>information form</span>
        </div>
        <div>
          <el-form label-width="80px" v-model="dataFrom" size="small" label-position="right">
            <el-form-item label="nickname" prop="nickName">
            <el-input  auto-complete="off" v-model="dataForm.nickName"></el-input>
            </el-form-item>
            <el-form-item label="name" prop="realName">
            <el-input  auto-complete="off" v-model="dataForm.realName"></el-input>
            </el-form-item>
            <el-form-item label="telphone" prop="phone">
            <el-input auto-complete="off" v-model="dataForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="email" prop="email">
            <el-input  maxlength="18" v-model="dataForm.homeUrl"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
          <el-button size="mini" type="primary">update</el-button>
          <el-button size="mini" type="warning">clean</el-button>
        </div>
        </div>
      </el-card>
        </div>
        </el-col>

      </el-row>
    </div>
</template>

<script>
export default {
    name: "PersonInfo",
    data(){
        return{
            dataForm:{
                nickName: '孜然',
                realName: '刘梓健',
                phone: '173567777777',
                email: 'liuzijian@163.com'
            }
        }
    },
    methods(){
        
    }
    }
</script>

<style lang="scss" scoped>
//卡片样式
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
//文本样式区
  .name-role {
    font-size: 16px;
    padding: 5px;
   text-align:center;
  }
   .sender{
      text-align:center;
    }
.registe-info{
  text-align: center;
  padding-top:10px;
}
.personal-relation {
  font-size: 16px;
  padding: 0px 5px 15px;
  margin-right: 1px;
    width: 100%
}

.relation-item {
  padding: 12px;
   
}
.dialog-footer{
  padding-top:10px ;
  padding-left: 10%;
}
//布局样式区
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
