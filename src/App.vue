<template>
  <div class="root">
    <TopNav />
    <router-view></router-view>
    <bottomNav />
  </div>
</template>

<script setup>
import { Dialog } from 'vant';
import { ref } from 'vue';
import bottomNav from './components/bottomNav.vue'
import TopNav from './components/topNav.vue';



</script>

<style lang="scss" scoped>
.root {
  background-color: #E1E4E8;
}
</style>
