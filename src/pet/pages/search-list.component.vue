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

   </template>
      <!-- Shelter Profile-->
</div>
<div class="card">
<pv-data-view :value="shelters" :layout="layout" : paginator="true" :rows="9">

  <template #grid="slotShelters">
    <div class="ProfileShelter">
      <div class="card_header">
        <div class="imagen">
          <img :src='slotShelters.data.image' style="width:5rem"/>
        </div>
        <div>
          <div class="name"> {{slotShelters.data.name}} </div>
          <div class="description"> {{slotShelters.data.description}}</div>
          <div class="elements">
            <a href="" class="pi pi-facebook"></a>
            <a href="" class="pi pi-twitter"></a>
            <a href="" class="pi pi-youtube"></a>
          </div>
          <div>
            <a href="" class="contact-me">Contactme</a>
          </div>
          <div class="card_footer">
            <div class="numbers">
              <div class="item">
                <span>400</span> Follows
              </div>
              <div class="item">
                <span>1k</span> Followers
              </div>
              <div class="item">
                <span>100</span> publications
              </div>
            </div>
          </div>
          <div class="Shelter-Email">Email: {{slotShelters.data.email}}</div>
        </div>
      </div>
    </div>


  </template>

</pv-data-view>

</div>


</template>


<script>

<style scoped>

  +*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
  .body{
  heigh: 100vh;
  background: url(../src/assets/logo.svg);
  background-size: cover;
  display: flex;
  align-items:center;
  justify-content:center;
}
  .profileShelter{
  width:400px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
}
  .card_header {
  background: #2c3e50;
  padding: 60px 40px;
}
  +.image{
  image-resolution: unset;
  display: inline-block;
  padding: 8px;
  background: linear-gradient(130deg,#74b9ff,#e66767);
  margin: auto;
  border-radius: 50%;
  background-size: 200% 200%;
  animation: Animation 2s ease infinite;
  -webkit-animation: Animation 2s ease infinite;
  -moz-animation: Animation 2s ease infinite;
}
  @keyframes Animation {
  25%{
    background-position: left bottom;
}
  50%{
  background-position: right bottom;
}
  75%{
  background-position: right top;
}
  100%{
  background-position: left top;
}
}
  .imagen img{
  display: block;
  width: 100px;
  heigh: 100px;
  border-radius: 50%;
}
  .name{
  color:#ffffff;
  font-size:28px;
  font-weight: 600;
  </div>
  </template>
  +  margin: 10px 0;
}
  .description{
  font-size: 18px;
  color: #e66767;
}
  .elements{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
  .elements to{
  color:#ffffff;
  width: 56px;
  font-size: 22px;
  transition: .3s linear;
}
  .elements to:hover {
  color: #e66767;
}
  .contact-me{
  display: inline-block;
  padding: 12px 50px;
  color: #e66767;
  border: 2px solid #e66767;
  border-radius: 6px;
  margin-top: 16px;
  transition: .3s linear;
}
  .contact-me:hover{
  background: #e66767;
  color: #fff;
}
  .card_footer{
  background: #f4f4f4;
  padding: 60px 10px;
}
  .numbers{
  display: flex;
  text-align: center;
}
  .item{
  flex: 1;
  text-transform: uppercase;
  font-size: 13px;
  color: #e66767;
}
  +.item span{
  display: block;
  color: #2c3e50;
  font-size: 30px;
}

</style>

<script>

