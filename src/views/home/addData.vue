<template>
  <div class="box">
    <div class="tab-box">
      <div :class="['item',activeType == item.value?'active':'']" v-for="item in dealList" :key="item.value"
        @click="changeType(item.value)">
        {{item.label}}</div>
    </div>
    <div class="money">{{money}}</div>
    <div class="form-item">
      <div class="title">分类</div>
      <div class="content type-box">
        <div class="type-item" v-for="item in inList" :key="item.value">
          {{item.label}}
        </div>
      </div>
    </div>
  </div>
  <div class="add">
    <div class="add-btn">保存</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const money = ref('')
const activeType = ref('A')
const dealList = [
  { label: '收入', value: 'A' },
  { label: '支出', value: 'B' },
  { label: '转账', value: 'C' },
]
const inList = [
  { label: '分类A', value: 'A' },
  { label: '分类B', value: 'B' },
  { label: '分类C', value: 'C' },
  { label: '分类D', value: 'D' },
  { label: '分类E', value: 'E' },
  { label: '分类E', value: 'F' },
]
const outList = [
  { label: '分类A', value: 'A' },
  { label: '分类B', value: 'B' },
  { label: '分类C', value: 'C' },
  { label: '分类D', value: 'D' },
  { label: '分类E', value: 'E' },
]
const transferList = [
  { label: '分类A', value: 'A' },
  { label: '分类B', value: 'B' },
  { label: '分类C', value: 'C' },
  { label: '分类D', value: 'D' },
  { label: '分类E', value: 'E' },
]
onMounted(() => {
  money.value = route.query.data as string
})
function changeType(type) {
  activeType.value = type
}
</script>
<style scoped lang="scss">
.box {
  padding: 0.2rem 0.3rem;
  background-color: #fff;
}

.tab-box {
  display: flex;
  justify-content: space-between;

  .item {
    text-align: center;
    width: 30%;
    border-radius: 0.4rem;
    padding: 0.1rem 0;
    background-color: #ebedf0;
    color: #969799;

    &.active {
      background-color: $primary;
      color: #fff;
    }
  }
}

.money {
  color: $primary;
  font-size: 0.8rem;
  line-height: 1rem;
  height: 1rem;
  border-bottom: 0.01rem solid $gray;
  margin-bottom: 0.2rem;
}

.form-item {
  .title {
    color: #969799;
    font-size: $fs-small;
    margin-bottom: 0.2rem;
  }

  .content {}

  .type-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .type-item {
      text-align: center;
      width: 30%;
      border-radius: 0.4rem;
      padding: 0.1rem 0;
      border: 0.01rem solid #ebedf0;
      color: #000;
      margin-right: 0.2rem;
      margin-bottom: 0.4rem;

      &.active {
        border: 0.01rem solid $primary;
        color: $primary;
      }
    }
  }
}

.add {
  padding: 0 0.3rem;
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: 100%;
  margin: 0 auto;

  .add-btn {
    width: 96%;
    background-color: $primary;
    color: #fff;
    text-align: center;
    border-radius: 0.15rem;
    line-height: 1rem;
  }
}
</style>