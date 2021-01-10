import delay from '@/utils/delay';

export default {
  namespaced: true,
  state: () => ({
    products: [
      {
        title: '沐浴乳',
        price: 300,
      },
    ],
  }),
  actions: {
    async addProduct({ state, commit }, { title, price }) {
      const products = [...state.products];
      products.push({ title, price });
      await delay(2000);
      commit('ADDPRODUCT', products);
    },
  },
  mutations: {
    ADDPRODUCT(state, products) {
      state.products = products;
    },
  },
};
