<template >

<v-main :value="pets">
  <span>{{pet.title}}</span>
</v-main>

</template>

<script>
import { PetsApiService } from "../services/pets-api.service";

export default {
  name: "search-list",
  data() {
    return {
      pets: [],
      pet: {},
      petsService: null
    };
  },
  created() {
    this.petsService = new PetsApiService();
    this.petsService.getAll().then( (response) => {
      this.pets = response.data;
      console.log("created");
    });
  },
}
</script>

<style scoped></style>