<template>

  <body class="card">

  <div class="Profile">
    <div class="card_header">
      <div class="Image">
        <img :src='shelter.image' style="width:10rem"/>
      </div>
      <div>
        <div class="UserName"> {{shelter.name}} </div>
        <div class="UserLastname"> {{shelter.description}}</div>
        <div class="Items">
          <a href="https://www.facebook.com/" class="pi pi-facebook"></a>
          <a href="https://www.instagram.com/" class="pi pi-twitter"></a>
          <a href="https://github.com/" class="pi pi-github"></a>
          <a href="https://youtube.com/" class="pi pi-youtube"></a>
        </div>
        <div>
          <!--<a href="" class="Message-me">Edit Info</a>-->
          <pv-button icon="pi pi-pencil" class="p-button-icon" @click="editInfo(shelter)"/>
        </div>
        <div class="card_footer">
          <div class="numbers">
            <div class="item">
              <h2>Contact </h2>
              <span>{{shelter.phone}}</span>
            </div>
            <div class="item">
              <h2>Location</h2>
              <span>{{shelter.location}}</span>
            </div>
            <div class="item">
              <h2>Address</h2>
              <span>{{shelter.address}}</span>
            </div>
            <div class="item">
              <h2>rating</h2>
              <span>{{shelter.rating}}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


  <pv-dialog v-model:visible="editShelterProfile" :style="{width: '650px'}" header="challenge Information" :model="true" class="p-fluid">

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Name" v-model.trim="shelter.name"
                       required="true" autofocus :class="{'p-invalid': submitted && !shelter.name}"/>
        <label for="Name">Name</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Phone" v-model.trim="shelter.phone"
                       required="true" autofocus :class="{'p-invalid' :submitted && !shelter.phone}"/>
        <label for="Phone">Phone</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Location" v-model.trim="shelter.location"
                       required="true" autofocus :class="{'p-invalid' :submitted && !shelter.location}"/>
        <label for="Location">Location</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Address" v-model.trim="shelter.address"
                       required="true" autofocus :class="{'p-invalid' :submitted && !shelter.address}"/>
        <label for="Address">Address</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Description" v-model.trim="shelter.description"
                       required="true" autofocus :class="{'p-invalid' :submitted && !shelter.description}"/>
        <label for="Description">Phone</label>
      </span>
    </div>

    <template #footer>
      <pv-button :label="'Cancel'.toUpperCase()" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
      <pv-button :label="'Save'.toUpperCase()" icon="pi pi-check" class="p-button-text" @click="saveEditInfo" />
    </template>

  </pv-dialog>

  </body>

</template>

<script>

import { SheltersApiService } from "../services/shelters-api.service";

export default {
  name: "shelterProfile-section.component",
  data(){
    return{
      editShelterProfile:false,
      submitted:false,
      deleteChangeInfoProfile: false,
      shelter:null,
      shelterService:null
    };
  },
  created() {
    this.shelterService = new SheltersApiService();
    this.shelterService.getById(1).then((response)=>{
      this.shelter = response.data;
      console.log("created");
    });
  },

  methods:{
    editInfo(Profile){
      console.log(Profile);
      this.shelter={...Profile};
      console.log(this.shelter);
      this.editShelterProfile=true;
    },
    hideDialog(){
      this.editShelterProfile=false;
      this.submitted=false;
    },
    saveEditInfo(){
      this.submitted=true;
      if(this.shelter.name.trim()){
        if(this.shelter.id){
          this.shelter=this.getStorableUser(this.shelter);
          this.shelterService
            .update(this.shelter.id,this.shelter)
            .then((response)=>{
              this.shelter[this.FindIndexById(response.data.id)]=
                this.shelter.id;
              this.$toast.add({
                severity:"success",
                summary:"Successful",
                detail: "change Updated",
                life:3000,
              });
              console.log(response);
            });
        } else {
          this.shelter.id=0;
          console.log(this.shelter);
          this.shelter=this.getStorableUser(this.shelter);
          this.shelterService.created(this.shelter).then((response)=>{
            this.shelter.push(this.shelter);
            this.$toast.add({
              severity:"success",
              summary:"Successful",
              detail: "change Updated",
              life:3000,
            });
            console.log(response);
          });
        }
        this.editShelterProfile=false;
      }
    },

    getStorableUser(displayerdUser){
      return{
        id:displayerdUser.id,
        name:displayerdUser.name,
        description:displayerdUser.description,
        url:displayerdUser.url,
        image:displayerdUser.image,
        rating:displayerdUser.rating,
      };
    },
    FindIndexById(id){
      return this.shelter.findIndex((shelter)=>shelter.id==id);
    },

  }
};
</script>



<style scoped>


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body{
  heigh: 100vh;
  background: #ffffff;
  background-size: cover;
  display: flex;
  align-items:center;
  justify-content:center;
}
.Profile{
  width:400px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
}
.card_header {
  background-color: rgba(20, 222, 220,0.90);
  padding: 60px 40px;
}
.Image{
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

.Image img{
  display: block;
  width: 100px;
  heigh: 100px;
  border-radius: 50%;
}
.UserName{
  color: #181818;
  font-size:28px;
  font-weight: 600;
  margin: 10px 0;
}

.UserLastname{
  font-size: 18px;
  color: #181818;
}
.Items{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.Items a{
  color:#ffffff;
  width: 56px;
  font-size: 22px;
  transition: .3s linear;
}
.Items a:hover {
  color: #e66767;
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
.item span{
  display: block;
  color: #2c3e50;
  font-size: 30px;
}

.Image img{
  display: block;
  width: 100px;
  heigh: 100px;
  border-radius: 50%;
}
.UserName{
  color:#ffffff;
  font-size:28px;
  font-weight: 600;
  margin: 10px 0;
}

.Message-me{
  display: inline-block;
  padding: 12px 50px;
  color: #e66767;
  border: 2px solid #e66767;
  border-radius: 6px;
  margin-top: 16px;
  transition: .3s linear;
}

.Message-me:hover{
  background: #e66767;
  color: #fff;
}
.card_footer{
  margin: 30px 0;
  background: #ffffff;
  padding: 25px 10px;
}

.numbers{
  display: inherit;
  text-align: left;
}
.item{
  flex: 5;
  text-transform: initial;
  margin: 10px;
  font-size: 13px;
  color: #222222;
}
.item span{
  border-bottom: 2px solid rgb(0 0 0 / 0.1);
  margin: 3px 0px;
  display: block;
  color: #2c3e50;
  font-size: 20px;
}

</style>