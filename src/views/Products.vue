<template>
  <h1>{{ $route.fullPath }}</h1>
  <router-link to="/" class="btn">返回</router-link>
  <button class="btn ml-4" @click.prevent="routerPush">返回</button>
  <router-view></router-view>
</template>

<script>
import { computed } from 'vue';
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const routerPush = () => {
      router.push({ path: '/' });
    };
    const fullPath = computed(() => route.fullPath);

    onBeforeRouteLeave(() => {
      console.log('onBeforeRouteLeave from Products');
    });

    return { routerPush, fullPath };
  },
};
</script>
