
<template>
  <pv-toolbar class="bg-blue-500">
    <template #end>
      <div>
        <router-link v-for="item in items" :to="item.to" custom v-slot="{ navigate, href }" :key="item.label">
          <pv-button class="p-button-text text-white" :href="href" @click="navigate">{{ item.label }}</pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
  <RouterView />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "Profile", to: "/form" },
        { label: "Search", to: "/search" },
        { label: "Log Out", to: "/home" },
      ],
    };
  },
};
</script>
