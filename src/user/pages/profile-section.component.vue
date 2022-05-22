<template>
  <div class="card">
    <pv-data-view :value="users" :layout="layout" :paginator="true" :rows="9">

      <template #list="slotUsers">
        <div class="col-12">
          <div class="UsersList">
            <img :src='slotUsers.data.image' style="width:5rem"/>
            <div class="User-list-detail">
              <div class="User-Name">
                {{slotUsers.data.name}}
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotUsers">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
            </div>
            <div class="product-grid-item-content">
              <img :src='slotUsers.data.image' style="width:5rem"/>
              <div class="User-name">{{slotUsers.data.name}}</div>
              <div class="User-Lastname">{{slotUsers.data.lastName}}</div>
              <div class="pi pi-angle-up">
                <div class="User-Phone">Phone: {{slotUsers.data.phone}}</div>
              </div>
              <div class="User-Email">Email: {{slotUsers.data.email}}</div>
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

.UsersList{
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
}

.card{
  background: #f2f2f2;
  panding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}

.User-name{
  font-size: 1.5rem;
  font-weight:500;
}

.User-Lastname{
  font-weight: 600;
  vertical-align: middle;
}
.User-Phone{
  font-weight: 300;
  font-size: 0.6rem;
}
.User-Email{
  font-weight: 300;
  font-size: 0.6rem;
}

</style>
