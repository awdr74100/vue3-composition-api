<template>
  <h1>{{ fullPath }}</h1>
  <router-link to="/products?name=YiRu&age=18" class="btn">前進</router-link>
  <button class="btn ml-4" @click.prevent="routerPush">前進</button>
</template>

<script>
import { computed } from 'vue';
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const routerPush = () => {
      router.push({ path: '/products/123456789', query: { name: 'Owen', timestamp: Date.now() } });
    };
    const fullPath = computed(() => route.fullPath);

    onBeforeRouteLeave(() => {
      console.log('onBeforeRouteLeave from Home');
    });

    return { routerPush, fullPath };
  },
};
</script>
