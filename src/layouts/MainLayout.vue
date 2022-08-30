<template>
  <q-layout view="lHh Lpr lFf " class="bg-grey-5">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <!---
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <template v-for="(route, i) in routes" :key="i">
          <essential-link-component :route="route" />
        </template>
      </q-list>
    </q-drawer>
  -->
    <q-page-container class="q-ml-auto q-mr-auto" style="width: 66%">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
//import EssentialLinkComponent from 'src/components/EssentialLinkComponent.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLinkComponent,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const routes = useRouter() // get visibles routes to make menu
      .getRoutes()
      .filter((route) => route.meta.visible);

    return {
      routes,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
