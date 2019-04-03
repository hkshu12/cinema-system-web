<template>
    <Menu class='menu' mode="horizontal" theme="dark" active-name="1">
        <div class='menu-left'>
            <MenuItem name="1">LOGO</MenuItem>
            <MenuItem name="2">222</MenuItem>
            <MenuItem name="3">333</MenuItem>
            <MenuItem name="4">444</MenuItem>
        </div>
        <div class='menu-right'>
            <MenuItem name="login">登录</MenuItem>
            <MenuItem name="register">注册</MenuItem>
        </div>
    </Menu>
</template>

<style>
.menu{
    position: relative;
}

.menu-right{
    float: right;
    margin: 0 auto;
    margin-right: 20px;
}
</style>

<script>
export default {
  name: 'menu'
}
</script>
