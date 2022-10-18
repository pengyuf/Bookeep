<template>
  <van-button>添加</van-button>
  <div class="test">asdf</div>
</template>

<script setup>
import { Dialog } from 'vant';
import { ref } from 'vue';
const VanDialog = Dialog.Component;
const show = ref(true)
</script>

<style lang="scss" scoped>
.test {
  color: $primary;
}
</style>
