<template>
    <div class="top-nav">
        <div class="iconfont icon-arrow-left icon" @click.self="backPage" v-if="showBack"></div>
        <span class="title">{{title}}</span>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const showBack = ref(true)
const title = ref("Bookeep")

watch(() => router.currentRoute.value.meta, (newValue, oldValue) => {
    const data = newValue
    showBack.value = data.showBack as any
    title.value = data.title as any
}, { immediate: true })

function backPage() {
    router.back()
}
</script>
<style scoped lang="scss">
.top-nav {
    background-color: $primary;
    position: relative;
    height: 1.1rem;
    line-height: 1.1rem;
    color: #fff;
    text-align: center;

    .icon {
        bottom: 0;
        left: 0;
        position: absolute;
        font-size: 0.5rem !important;
    }

    .title {
        font-size: $fs-big;
    }
}
</style>