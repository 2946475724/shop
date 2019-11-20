<template>
<!-- 登录页面 -->
    <div class="login-area">
        <div class="bg-img"><img src="" alt=""></div>
        <div class="user-login">
            <div class=""><h2>用户登录</h2></div>
            <div class="loginInput">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input name="name" id="" placeholder="用户名" type="text">
            </div>
            <div class="loginInput">
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input name="password" id="password" placeholder="密码" type="password">
            </div>
            <div>
                <a href="#" class="forgetPwd">忘记登录密码</a>
                <a href="register.html" class="register">免费注册</a>
            </div>
            <div>
                <button class="btn btn-block redButton" type="submit">登录</button>
            </div>
        </div>
    </div>
</template>

<<script>

export default {
    name: 'Login',
    data() {
        return {
            
        }
    },
}
</script>


<<style lang="">
    
</style>