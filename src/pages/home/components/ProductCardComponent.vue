<template>
  <q-card
    bordered
    class="card-item"
    :class="expanded ? 'card-up' : 'card-down'"
    @mouseover="expanded = true"
    @mouseout="expanded = false"
  >
    <div class="q-pa-lg">
      <img :src="product.image" class="card-image" />
    </div>
    <q-separator />

    <q-card-section>
      <div class="text-overline text-orange-9">
        <q-rating v-model="rating" size="2em" color="orange" readonly />
      </div>
      <div class="text-h6 q-mt-sm text-weight-bolder">
        {{ formatMoney(product.price) }}
      </div>
      <div class="text-subtitle" v-if="verifyShipping(product.price)">
        {{ $t('home.price', { value: formatMoney(product.price / 10) }) }}
      </div>
      <div v-else><br /></div>
      <div class="q-mt-sm text-green" v-html="$t('home.free_shipping')"></div>
    </q-card-section>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          <div class="q-mt-sm q-mb-xs">{{ product.title }}</div>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script lang="ts">
import { formatMoney } from 'src/helpers/numberManipulationHelper';
import { defineComponent, ref, PropType } from 'vue';
import { IProduct } from '../models';

export default defineComponent({
  name: 'ProductCardComponent',

  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },

  setup(props) {
    const expanded = ref(false),
      rating = ref(props.product.rating.rate);

    const verifyShipping = (value: number) => (value > 100 ? true : false);
    return { expanded, rating, formatMoney, verifyShipping };
  },
});
</script>

<style scoped lang="scss">
.card-item {
  cursor: pointer;
}
.card-item:hover {
  box-shadow: 1px 1px 16px rgb(73, 73, 73);
}
.card-image {
  width: 155px;
  height: 165px;
  display: block;
  margin: auto;
}
.card-up {
  z-index: 1;
}
.card-down {
  z-index: 2;
}
</style>
