<script>
export default{
  name: "navigation-section",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Profile", to: "/profile" },
        { label: "Search", to: "/search" },
        { label: "Shelter", to: "/shelter"},
      ],
    };
  },
};
</script>

<template>
  <pv-toolbar class="bg-blue-500">
    <template #start>
      <pv-img src="https://i.postimg.cc/25V8GQMp/logo.png" />
    </template>
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

<style>
</style>
