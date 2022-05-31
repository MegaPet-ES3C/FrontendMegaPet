<template>
  <body class="card">

  <div class="Profile">
    <div class="card_header">
      <div class="Image">
        <img :src='user.image' style="width:10rem"/>
      </div>
      <div>
        <div class="UserName"> {{user.name}} </div>
        <div class="UserLastname"> {{user.lastName}}</div>
        <div class="Items">
          <a href="https://www.facebook.com/" class="pi pi-facebook"></a>
          <a href="https://www.instagram.com/" class="pi pi-twitter"></a>
          <a href="https://github.com/" class="pi pi-github"></a>
          <a href="https://youtube.com/" class="pi pi-youtube"></a>
        </div>
        <div>
          <!--<a href="" class="Message-me">Edit Info</a>-->
          <pv-button icon="pi pi-pencil" class="p-button-icon" @click="editInfo(user)"/>
        </div>
        <div class="card_footer">
          <div class="numbers">
            <div class="item">
              <h2>Phone User: </h2>
              <span>{{user.phone}}</span>
            </div>
            <div class="item">
              <h2>Gmail</h2>
              <span>{{user.email}}</span>
            </div>
            <div class="item">
              <h2>User Birthday</h2>
              <span>{{user.birthday}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <pv-dialog v-model:visible="editInfoProfile" :style="{width: '650px'}" header="challenge Information" :model="true" class="p-fluid">

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Name" v-model.trim="user.name"
                       required="true" autofocus :class="{'p-invalid': submitted && !user.name}"/>
        <label for="Name">Name</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="LastName" v-model.trim="user.lastName"
                       required="true" autofocus :class="{'p-invalid' :submitted && !user.lastName}"/>
        <label for="LastName">LastName</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Password" v-model.trim="user.password"
                       required="true" autofocus :class="{'p-invalid' :submitted && !user.password}"/>
        <label for="Password">Password</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Birthday" v-model.trim="user.birthday"
                       required="true" autofocus :class="{'p-invalid' :submitted && !user.birhtday}"/>
        <label for="Birthday">Birthday</label>
      </span>
    </div>

    <div class="field mt-5">
      <span class="p-float-label">
        <pv-input-text type="text" id="Phone" v-model.trim="user.phone"
                       required="true" autofocus :class="{'p-invalid' :submitted && !user.phone}"/>
        <label for="Phone">Phone</label>
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
import { UsersApiService } from "../services/users-api.service";

export default {
  name: "profile-section.component",
  data() {
    return {
      editInfoProfile:false,
      submitted:false,
      deleteChangeInfoProgile: false,
      user: null,
      userService: null
    };
  },
  created() {
    this.userService = new UsersApiService();
    this.userService.getById(5).then((response) => {
      this.user = response.data;
      console.log("created");
    });
  },


  methods:{
    editInfo(Profile){
      console.log(Profile);
      this.user={...Profile};
      console.log(this.user);
      this.editInfoProfile=true;
    },
    hideDialog(){
      this.editInfoProfile=false;
      this.submitted=false;
    },
    saveEditInfo(){
      this.submitted=true;
      if(this.user.name.trim()){
        if(this.user.id){
          this.user=this.getStorableUser(this.user);
          this.userService
            .update(this.user.id,this.user)
            .then((response)=>{
              this.user[this.FindIndexById(response.data.id)]=
                this.user.id;
              this.$toast.add({
                severity:"success",
                summary:"Successful",
                detail: "change Updated",
                life:3000,
              });
              console.log(response);
            });
        } else {
          this.user.id=0;
          console.log(this.user);
          this.user=this.getStorableUser(this.user);
          this.userService.created(this.user).then((response)=>{
            this.user.push(this.user);
            this.$toast.add({
              severity:"success",
              summary:"Successful",
              detail: "change Updated",
              life:3000,
            });
            console.log(response);
          });
        }
        this.editInfoProfile=false;
      }
    },

    getStorableUser(displayerdUser){
      return{
        id:displayerdUser.id,
        name:displayerdUser.name,
        lastName:displayerdUser.lastName,
        phone:displayerdUser.phone,
        image:displayerdUser.image,
        email:displayerdUser.email,
        birthday:displayerdUser.birthday,
        password:displayerdUser.password,

      };
    },
    FindIndexById(id){
      return this.user.findIndex((user)=>user.id==id);
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