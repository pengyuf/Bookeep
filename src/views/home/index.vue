<template>
  <div class="home-box">
    <numberKeyboard v-if="showBoard" @hideBoard="controlBoard" @closeKeyboard="getBoardData" />
    <i class="iconfont icon-add add-btn" @click="controlBoard"></i>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { useRouter } from 'vue-router';
import numberKeyboard from '../../components/numberKeyboard.vue';
const router = useRouter()

const showBoard = ref(false)
const boardData = ref('')

function controlBoard() {
  showBoard.value = !showBoard.value
}
function getBoardData(data) {
  router.push({ path: '/home/addData', query: { data } })
}
</script>
<style scoped lang="scss">
.home-box {}

.add-btn {
  position: fixed;
  bottom: 200px;
  right: 50px;
  color: $primary;
  font-size: 100px !important;
}
</style>