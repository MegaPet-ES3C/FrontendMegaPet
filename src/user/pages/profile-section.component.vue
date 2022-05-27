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

