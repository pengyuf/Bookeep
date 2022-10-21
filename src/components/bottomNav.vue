<template>
    <div class="nav-box">
        <van-tabbar v-model="active" active-color="#22C5B9" inactive-color="#000" @change="onChange">
            <van-tabbar-item name="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item name="/account" icon="friends-o">账户</van-tabbar-item>
            <van-tabbar-item name="/chart" icon="points">统计</van-tabbar-item>
            <van-tabbar-item name="/myself" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const active = ref('home');

function onChange(data) {
    if (data) {
        router.push(data)
    }
}
</script>
<style scoped lang="scss">

</style>