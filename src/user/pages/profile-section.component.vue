<template>
  <div class="card">
    <pv-data-view :value="users" :layout="layout" :paginator="false" :rows="9">

      <template #grid="slotUsers">

        <!-- nuevo -->

        <div class="perfil">
          <div class="card_header">
            <div class="imagen">
              <img :src='slotUsers.data.image' style="width:5rem"/>
            </div>
            <div>
              <div class="nombre"> {{slotUsers.data.name}} </div>
              <div class="descripcion"> {{slotUsers.data.lastName}}</div>
              <div class="elementos">
                <a href="" class="pi pi-facebook"></a>
                <a href="" class="pi pi-twitter"></a>
                <a href="" class="pi pi-github"></a>
                <a href="" class="pi pi-youtube"></a>
              </div>
              <div>
                <a href="" class="contact-me">Contactame</a>
              </div>
              <div class="card_footer">
                <div class="numbers">
                  <div class="item">
                    <span>120</span> Seguidos
                  </div>
                  <div class="item">
                    <span>127</span> Seguidores
                  </div>
                  <div class="item">
                    <span>220</span> Publicaciones
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </template>

    </pv-data-view>
  </div>
</template>

<script>
import { UsersApiService } from "../services/users-api.service";

export default {
  name: "profile-section.component",
  data() {
    return {
      users: [],
      user: {},
      userService: null,
      layout: "grid",
    };
  },
  created() {
    this.userService = new UsersApiService();
    this.userService.getAll().then((response) => {
      this.users = response.data;
      console.log("created");
    });
  },
};

</script>

<style scoped>

*{
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
.perfil{
  width:400px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
}
.card_header {
  background: #2c3e50;
  padding: 60px 40px;
}
.imagen{
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
.nombre{
  color:#ffffff;
  font-size:28px;
  font-weight: 600;
  margin: 10px 0;
}
.descripcion{
  font-size: 18px;
  color: #e66767;
}
.elementos{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.elementos a{
  color:#ffffff;
  width: 56px;
  font-size: 22px;
  transition: .3s linear;
}
.elementos a:hover {
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
.item span{
  display: block;
  color: #2c3e50;
  font-size: 30px;
}

</style>
