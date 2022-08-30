<template>
  <q-card flat bordered :class="expanded ? 'card-up' : 'card-down'">
    <div class="q-pa-lg">
      <img :src="product.image" class="card-image" />
    </div>
    <q-card-section>
      <div class="text-overline text-orange-9">
        <q-rating v-model="rating" size="2em" color="orange" readonly />
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
      <div class="text-caption text-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn flat color="dark" label="Share" />
      <q-btn flat color="primary" label="Book" />

      <q-space />

      <q-btn
        color="grey"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          {{ 'awd' }}
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script lang="ts">
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

    return { expanded, rating };
  },
});
</script>

<style scoped lang="scss">
.card-image {
  width: 225px;
  height: 255px;
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
