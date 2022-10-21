<template>
    <div class="keyboard-box" @click.self="hideBoard">
        <div class="body">
            <div class="value-box">
                <span class="iconfont icon-rmb icon"></span>
                <span class="value">{{value}}</span>
            </div>
            <van-number-keyboard v-model="value" :show="show" theme="custom" extra-key="." close-button-text="完成"
                @close="closeKeyboard" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
const emits = defineEmits(['hideBoard', 'closeKeyboard'])
const show = ref(true);
const value = ref('')
function closeKeyboard() {
    emits('closeKeyboard', value.value)
    hideBoard()
}
function hideBoard() {
    emits('hideBoard')
}
</script>
<style scoped lang="scss">
.keyboard-box {
    background-color: rgba(153, 153, 153, .3);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;

    .body {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;

        .value-box {
            padding: 0.16rem;
            background-color: #f2f3f5;
            margin-right: 0.1rem;
            display: flex;
            align-items: center;

            .icon {
                color: $primary;
                font-size: 1rem !important;
            }

            .value {
                font-size: 0.8rem;
            }
        }
    }

    .van-number-keyboard {
        position: relative;
    }
}
</style>