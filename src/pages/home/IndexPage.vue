<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-md-3 q-pa-md"
        v-for="(product, i) in products"
        :key="i"
      >
        <product-card-component :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCardComponent from './components/ProductCardComponent.vue';
import { useHomeStore } from './stores/homeStore';
import { defineComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'IndexPage',

  components: {
    ProductCardComponent,
  },

  setup() {
    const homeStore = useHomeStore(),
      { products } = storeToRefs(homeStore);

    onMounted(() => {
      homeStore.fetchProducts();
    });

    return { products };
  },
});
</script>
