<template>
  <body class="card">

        <div class="Profile">
          <div class="card_header">
            <div class="Image">
              <img :src='user.image' style="width:5rem"/>
            </div>
            <div>
              <div class="UserName"> {{user.name}} </div>
              <div class="UserLastname"> {{user.lastName}}</div>
              <div class="Items">
                <a href="" class="pi pi-facebook"></a>
                <a href="" class="pi pi-twitter"></a>
                <a href="" class="pi pi-github"></a>
                <a href="" class="pi pi-youtube"></a>
              </div>
              <div>
                <a href="" class="Message-me">My Messages</a>
              </div>
              <div class="card_footer">
                <div class="numbers">
                  <div class="item">
                    <span>120</span> Follows
                  </div>
                  <div class="item">
                    <span>127</span> Followers
                  </div>
                  <div class="item">
                    <span>220</span> Posts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  </body>
</template>

<script>
import { UsersApiService } from "../services/users-api.service";

export default {
  name: "profile-section.component",
  data() {
    return {
      user: null,
      userService: null
    };
  },
  created() {
    this.userService = new UsersApiService();
    this.userService.getById(1).then((response) => {
      this.user = response.data;
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
  background: #2c3e50;
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
  color:#ffffff;
  font-size:28px;
  font-weight: 600;
  margin: 10px 0;
}
.UserLastname{
  font-size: 18px;
  color: #ffffff;
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
