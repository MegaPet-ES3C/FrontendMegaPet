<template>
  <div class="flex justify-content-center">
    <pv-card class="border-none shadow-none bg-transparent card  p-fluid">
      <template v-slot:title>
        <div class="text-center">Complete with your personal information</div>
      </template>
      <template v-slot:content>
        <div class="flex flex-column card-container">
          <div class="flex row align-items-center justify-content-center">
            <pv-input-text placeholder="Name" v-model.trim="shelter.name" class="mt-5"/>
            <pv-input-mask id="phone" mask="(051) 999-999-999" v-model.trim="shelter.phone"  placeholder="(051) 999-999-999" class="mt-5 ml-7"/>
          </div>
          <div class="flex align-items-center justify-content-center">
            <pv-input-text placeholder="Location" v-model.trim="shelter.location" class="mt-5"/>
            <pv-input-text placeholder="Address" v-model.trim="shelter.address"  class="mt-5 ml-7"/>
          </div>
          <div class="flex row align-items-center justify-content-center ">
            <pv-input-text placeholder="Email " v-model.trim="shelter.email" class="mt-5"/>
            <pv-password placeholder="Password" v-model.trim="shelter.password" class="mt-5 ml-7 w-full">
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer="sp">
                {{ sp.level }}
                <pv-divider />
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </pv-password>
          </div>
          <div class="flex align-items-center justify-content-center mt-5"  >
            <pv-input-text placeholder="URL-Image " v-model.trim="shelter.image" />
          </div>
          <div class="flex align-items-center justify-content-center mt-5"  >
            <pv-input-text placeholder="URL-WebPage " v-model.trim="shelter.url" />
          </div>
          <div class="flex align-items-center justify-content-center mt-5">
            <pv-text-area placeholder="---------Put some description about your organization----------" v-model.trim="shelter.description" rows="10" cols="30" />
          </div>
        </div>
      </template>
      <template v-slot:footer>

          <pv-button  label="Submit" class=" p-button-rounded" @click="saveShelter" />

      </template>
    </pv-card>
  </div>
</template>

<script>
import { SheltersApiService } from "../shelter/services/shelters-api.service";

export default {
  name: "personalinformation-component",
  data(){
    return{
      submitted: false,
      shelter: {},
      shelters: [],
      sheltersService: null
    };
  },
  created() {
    this.sheltersService = new SheltersApiService();
    this.sheltersService.getAll().then((response) => {
      this.shelters = response.data;
      console.log("created");
    });
  },
  methods: {
    getStorableShelter(displayableShelter){
      return {
        id: displayableShelter.id,
        name: displayableShelter.name,
        email: displayableShelter.email,
        password: displayableShelter.password,
        description: displayableShelter.description,
        url: displayableShelter.url,
        image: displayableShelter.image,
        phone: displayableShelter.phone,
        location: displayableShelter.location,
        address: displayableShelter.address,
      }
    },

    nextPage(){
      this.$emit("next-page",{
        formData:{},
        pageIndex: 0,
      })
    },
    saveShelter(){
      this.$emit("next-page",{
        formData:{},
        pageIndex: 0,
      })
      if (this.shelter.id) {
        this.shelter = this.getStorableShelter(this.shelter);
        this.sheltersService
            .update(this.shelter.id, this.shelter)
      } else {
        this.shelter.id = 0;
        console.log(this.shelter);
        this.shelter = this.getStorableShelter(this.shelter);
        this.sheltersService.create(this.shelter).then((response) => {
          this.shelters.push(this.shelter);
          console.log(response);
        });
      }
    }
  }
};
</script>

<style scoped>

</style>