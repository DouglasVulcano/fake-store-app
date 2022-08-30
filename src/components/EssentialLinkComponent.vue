<template>
  <q-item clickable :to="{ name: route.name }">
    <q-item-section v-if="route.meta.icon" avatar>
      <q-icon :name="route.meta.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(route.meta.label) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLinkComponent',

  props: {
    route: {
      type: Object,
      required: true,
    },
  },
});
</script>
