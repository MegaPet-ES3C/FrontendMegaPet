<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-title>Megapet</v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link
        v-for="item in items"
        :to="item.to"
        custom
        v-slot="{ navigate, href }"
        :key="item.label"
      >
        <v-btn :href="href" @click="navigate">
          {{ item.label }}
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "Profile", to: "/home" },
        { label: "Search", to: "/search" },
        { label: "Log Out", to: "/home" },
      ],
    };
  },
};
</script>
