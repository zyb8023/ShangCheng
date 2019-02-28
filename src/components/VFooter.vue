<template>
    <div class="footer">
        <ul>
            <router-link tag='li' to='/home' active-class='footer-active-class'>
                <van-icon name="wap-home" />
                <span>首页</span>  
            </router-link>
            <router-link tag='li' to='/kind' active-class='footer-active-class'>
                <van-icon name="qr"></van-icon>
                <span>分类</span>
            </router-link>
            <router-link tag='li' to='/cart' active-class='footer-active-class'>
                <van-icon name="shopping-cart-o"></van-icon>
                <span>购物车</span>
            </router-link>
            <router-link tag='li' to='/user' active-class='footer-active-class'>
                <van-icon name="user-o"></van-icon>
                <span>我</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'
Vue.use(Icon)
export default {
    
}
</script>

