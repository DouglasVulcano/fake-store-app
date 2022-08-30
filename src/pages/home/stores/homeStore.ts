import { defineStore } from 'pinia';
import { api } from 'src/http/requests';
import services from 'src/http/services';

export const useHomeStore = defineStore('home', {
  state: () => ({
    products: [],
  }),

  getters: {
    getProducts: (state) => state.products,
  },

  actions: {
    fetchProducts() {
      api(services.home.products()).then(({ data }) => {
        this.products = data;
      });
    },
  },
});
