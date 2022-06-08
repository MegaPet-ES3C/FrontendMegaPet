<template>

  <div class="container">
    <div class="cards">
      <template v-for="shelter in shelters">
        <pv-card>
          <template #header>
            <img :src='shelter.image' />
          </template>
          <template #title>
            {{shelter.name}}
          </template>
          <template #content>
            {{shelter.description}}
            <div class = "rating">
              <h3>{{shelter.rating}}</h3>
            </div>
            <div>
              <a href="http://localhost:3000/shelterProfile" class="pi pi-user"></a>
            </div>
          </template>
        </pv-card>
      </template>
    </div>
  </div>

</template>

<script>
import { SheltersApiService } from "../services/shelters-api.service";

export default {
  name: "shelter-section.component",
  data() {
    return {
      sheltersService: null,
      shelters: [],
      shelterDialog: false,
      deleteShelterDialog: false,
      deleteSheltersDialog: false,
      shelter: {},
      filters:{},
      submitted: false,
    };
  },

  created(){
    this.sheltersService = new SheltersApiService();
    this.sheltersService.getAll().then((response) => {
      this.shelters = response.data;
      console.log("created");
    });
  }

}

</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin:100px 0px;
  max-width: 1200px;

}

.container{
  display: flex;
  justify-content: center;
  align-content: center;
}
.rating{
  display: flex;
  justify-content: left;
  align-content: center;
}
img{
  height: 200px;
  object-fit: contain;
  background-color: #EAEAEA;
}
</style>
