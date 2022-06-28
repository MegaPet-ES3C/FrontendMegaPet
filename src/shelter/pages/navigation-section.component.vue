<template>
  <pv-toolbar class="bg-blue-100">
    <template #start>
      <pv-img src="https://i.postimg.cc/25V8GQMp/logo.png" />
    </template>
    <template #end>
      <div>
        <router-link v-for="item in items" :to="item.to" custom v-slot="{ navigate, href }" :key="item.label">
          <pv-button class="p-button-text text-black font-bold hover:bg-blue-500" :href="href" @click="navigate">{{ item.label }}</pv-button>

        </router-link>

      </div>

    </template>
  </pv-toolbar>
  <RouterView />
</template>

<script>
export default {
  name: "navigation-section.component",
  data() {
    return {
      drawer: false,
      userService: null,
      user: null,
      items: [
        { label: "Profile", to: "/shelterProfile" },
        { label: "Search", to: "/searchPetsByShelters" },
        { label: "Shelter", to: "/shelters"},
      ],
    };
  },

}
</script>

<style>

</style>