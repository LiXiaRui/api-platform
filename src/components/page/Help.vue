<template>
    <el-container>
        <el-header class="header"><h2>帮助与文档</h2></el-header>
        <el-container style="margin-top:30px;">
            <el-header>
                <el-row class="tab">
                    <el-col :span="6">
                        <div>
                            <i class="el-icon-edit"> 关于API</i>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <i class="el-icon-tickets"> 使用文档</i>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <i class="el-icon-document"> 常见问题</i>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <i class="el-icon-setting"> 常用工具</i>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="6">
                        <div>
                            <ul>
                                <li>API介绍</li>
                                <li>应用场景</li>
                                <li>如何注册</li>
                                <li>如何登录</li>
                                <li>修改密码</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <ul>
                                <li>添加API</li>
                                <li>测试API</li>
                                <li>实名认证</li>
                                <li>示例代码</li>
                                <li>账户充值</li>
                                <li>账户升级</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <ul>
                                <li>如何使用API服务</li>
                                <li>API区域是什么</li>
                                <li>API是什么</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="6" style="padding-left:15px;">
                        <div>
                            <ul>
                                <li>辅助工具</li>
                                
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.el-main{
    height:500px;
}

.el-header{
    padding: 0px;

}
.el-header h2{
    //background-image: url('../static/images/home/help.jpg');
    padding: 20px;
    margin-top: 0px;
}

.tab{
    border-bottom: 1px solid gainsboro;
}
.el-col i{
    margin-top: 40px;
    font-size: 22px;
    font-weight:500;
    margin-bottom: 15px;
}

.el-col ul li{
    cursor: pointer;
    text-align: left;
    margin-left: 80px;
    margin-bottom: 10px;
    //color: #4682B4;
}

.el-col ul li:hover{
    color: rgb(104, 166, 218);
}
</style>>
