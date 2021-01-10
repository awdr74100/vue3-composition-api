<template>
  <h2>嵌套 ID：{{ $route.params.id || 'undefined' }}</h2>
  <h2>是否登入：{{ isSignIn }}</h2>
  <pre>商品列表：{{ products }}</pre>
  <button class="btn" @click.prevent="updateStatus">更新登入狀態</button>
  <button class="btn ml-4" @click.prevent="addProduct('洗髮乳', 900)">新增商品</button>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const updateStatus = () => {
      store.commit('ISSIGNIN', !store.state.isSignIn);
    };
    const addProduct = async (title, price) => {
      await store.dispatch('products/addProduct', { title, price });
      console.log('success');
    };
    return {
      isSignIn: computed(() => store.state.isSignIn),
      products: computed(() => store.state.products.products),
      updateStatus,
      addProduct,
    };
  },
};
</script>
