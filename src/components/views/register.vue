<template>
  <div class="register-container">
      <el-form :model="ruleForm2" :rules="rules3"
      status-icon
      ref="ruleForm2" 
      label-position="left" 
      label-width="0px" 
      class="demo-ruleForm register-page">
          <h3 class="title" style="text-align:center;">API系统注册</h3>
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
              <el-form-item prop="password_confirmation">
                  <el-input type="password" 
                      v-model="ruleForm2.password_confirmation" 
                      auto-complete="off" 
                      placeholder="确认密码"
                  ></el-input>
              </el-form-item>
              <el-form-item prop="phone">
                  <el-input type="text" 
                      v-model="ruleForm2.phone" 
                      auto-complete="off" 
                      placeholder="手机号码"
                  ></el-input>
              </el-form-item>
              <el-form-item prop="idcard">
                  <el-input type="text" 
                      v-model="ruleForm2.idcard" 
                      auto-complete="off" 
                      placeholder="身份证"
                  ></el-input>
              </el-form-item>
          
          <el-form-item style="width:100%;">
              <el-button type="primary" style="width:48%;" @click="handleSubmit" :loading="registering">注册</el-button>
              <el-button type="primary" style="width:48%;" @click="goTo('/news')">取消</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    var validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else {
            if (this.ruleForm.password_confirmation !== '') {
            this.$refs.ruleForm.validateField('password_confirmation');
            }
            callback();
        }
    };

    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
    };
      return {
            registering:false,
            ruleForm2: {
                email:'',
                password:'',
                password_confirmation:'',
                phone:'',
                idcard:''
            },

            rules3: {
                phone: [
                    {
                        //required: true,
                        message: "请输入电话号码"
                    },
                    {
                        pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
                        message: "手机格式不对"
                    }
                ],
                email: [
                    {
                        required: true,
                        message: "请输入电子邮箱"
                    },
                    {
                        pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
                        message: "请输入有效的邮箱"
                    }
                ],

                pass: [
                    {
                        required: true,
                        validator: validatePass,
                        trigger: "blur",
                        message: "请输入密码"
                    }
                ],

                checkPass: [
                    {
                        required: true,
                        validator: validatePass2,
                        trigger: "blur",
                        message: "确认密码"
                    }
                ]
            }
      }
  },
  methods: {
      goTo(path) {
          console.log("success");
          this.$store.dispatch('logout')
          this.$router.replace(path);
      },
      handleSubmit(event){
          this.$refs.ruleForm2.validate((valid) => {
              if(valid){
                  this.registering = true;
                    var URL = '/api/api-platform/v1/kong/user';
                    axios.post(URL,this.ruleForm2)
                    //then获取成功；response成功后的返回值（对象）
                    .then(response=>{                                             
                        console.log(response.data);
                        if(response.data.code==201){
                            this.registering = false;
                            this.$alert('注册成功！', 'info', {
                              confirmButtonText: 'ok'
                            });
                            this.$router.push({path: '/login'});
                         
                        }else{
                            this.registering = false;
                            this.$alert('注册失败！', 'info', {
                              confirmButtonText: 'ok'
                            })
                        }                     
                    })
                    //获取失败
                    .catch(error=>{
                      console.log(error);
                      alert('网络错误，不能访问');
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
.register-container {
  width: 100%;
  height: 100%;
}
.register-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 100px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>