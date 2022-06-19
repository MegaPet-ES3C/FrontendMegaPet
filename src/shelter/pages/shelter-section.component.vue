<template>
  <pv-button label="Nuevo" icon="pi pi-plus" @click="displayBasic = true"/>
  <pv-dialog  v-model:visible="displayBasic" >
    <template #header>
      <h3>Header</h3>
    </template>

    <form @submit="newShelter">
      <label>Name</label> <br>
      <pv-input-text type="text" id="name" v-model.trim="shelter.name"  /> <br><br>
      <label>Description</label> <br>
      <pv-text-area v-model.trim="shelter.description" /><br><br>
      <label>Link</label> <br>
      <pv-input-text type="text" id="url" v-model.trim="shelter.url" /><br><br>
      <label>Phone</label> <br>
      <pv-input-text type="text" id="phone" v-model.trim="shelter.phone" /><br><br>
      <label>Location</label> <br>
      <pv-input-text type="text" id="location" v-model.trim="shelter.location" /><br><br>
      <label>Address</label> <br>
      <pv-input-text type="text" id="adress" v-model.trim="shelter.address" /><br><br>
      <label>URL image</label> <br>
      <pv-input-text type="text" id="image" v-model.trim="shelter.image" /><br><br>

      <pv-button type="submit" label="Submit" icon="pi pi-check" autofocus />
      <pv-button label="Cancelar" icon="pi pi-times" @click="displayBasic = false"/>
    </form>

    <template #footer>


    </template>

  </pv-dialog>
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
      displayBasic: false,
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
  },


  methods:{
    getStorableShelter(displayableShelter) {
      return {
        id: displayableShelter.id,
        name: displayableShelter.name,
        description: displayableShelter.description,
        url: displayableShelter.url,
        image: displayableShelter.image,
        phone: displayableShelter.phone,
        location: displayableShelter.location,
        address: displayableShelter.address,
      }
    },

    newShelter(){
      this.submitted = true;
      this.shelter.id = 0;
      console.log(this.shelter);
      this.shelter = this.getStorableShelter(this.shelter);
      this.sheltersService.create(this.shelter).then((response) => {
        this.shelter.push(this.shelter);
        console.log(response);
      });

      this.shelter = {};

    }
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
