<template>
  <div class="login-container">
      <el-form :model="ruleForm2" :rules="rules2"
      status-icon
      ref="ruleForm2" 
      label-position="left" 
      label-width="0px" 
      class="demo-ruleForm login-page">
          <h3 class="title" style="text-align:center;">API系统登录</h3>
          <el-form-item prop="email">
              <el-input type="text" 
                  v-model="ruleForm2.email" 
                  auto-complete="off" 
                  placeholder="邮箱"
              ></el-input>
          </el-form-item>
              <el-form-item prop="password">
                  <el-input type="password" 
                      v-model="ruleForm2.password" 
                      auto-complete="off" 
                      placeholder="密码"
                  ></el-input>
              </el-form-item>
          <el-checkbox 
              v-model="checked"
              class="rememberme"
          >记住密码</el-checkbox>
          <el-form-item style="width:100%;">
              <el-button type="primary" style="width:48%;" @click="handleSubmit" :loading="logining">登录</el-button>
              <el-button type="primary" style="width:48%;" @click="goTo('/news')">取消</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            logining: false,
            ruleForm2: {
                //   username: 'admin',
                //   password: '123',
                email:'',
                password:'',
            },
            rules2: {
                email: [{required: true, message: 'please enter your account', trigger: 'blur'}],
                password: [{required: true, message: 'enter your password', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        goTo(path) {
            console.log("success");
            this.$store.dispatch('logout')
            this.$router.push(path);
         },
        handleSubmit(event){
            // if(this.ruleForm2.username == 'admin'){
            // this.logining = false;
            // sessionStorage.setItem('user', this.ruleForm2.username);
            // this.$router.push({path: '/userinfo'});
            // }else{
            //     this.logining = false;
            //     this.$alert('username or password wrong!', 'info', {
            //         confirmButtonText: 'ok'
            //     })
            // }                     
            this.$refs.ruleForm2.validate((valid) => {
                if(valid){
                    this.logining = true;
                    let params={
                        email:this.ruleForm2.email,
                        password:this.ruleForm2.password
                    } 
                    var URL = '/api/api-platform/v1/user/login';
                    axios.post(URL,params)
                            //then获取成功；response成功后的返回值（对象）
                    .then(response=>{                                             
                        console.log(response.data);  
                        if(response.data.user){
                            this.logining = false;
                            this.data =  response.data;
                            console.log(this.data.user.id);
                            sessionStorage.setItem('user', this.data.user.id);
                            sessionStorage.setItem('token', this.data.token);
                            this.$store.dispatch('login');
                            this.$router.replace({path: '/userinfo'});
                            
                        }
                        else{
                            this.logining = false;
                            this.$alert('email or password wrong!', 'info', {
                            confirmButtonText: 'ok'
                            })
                        }                     
                    })
                    //获取失败
                    .catch(error=>{
                        console.log(error);
                        //alert('网络错误，不能访问');
                        this.$alert('email or password wrong!', 'info', {
                                confirmButtonText: 'ok'
                                });
                            this.logining=false;
                    })                   
                }else{
                    console.log('error submit!');
                    return false;
                }
            })

        }
    }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>