import { createStore } from 'vuex';
import productsModule from './modules/products';

const store = createStore({
  strict: process.env.NODE_ENV === 'development',
  state: () => ({
    isSignIn: false,
  }),
  actions: {},
  mutations: {
    ISSIGNIN(state, status) {
      state.isSignIn = status;
    },
  },
  getters: {},
  modules: {
    products: productsModule,
  },
});

export default store;
