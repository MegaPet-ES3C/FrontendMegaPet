<template>
  <div class="form-demo">
    <div class="flex justify-content-center ">
      <pv-card class="card shadow-8 " >
        <template #title>
          <h2 class="text-center">Register</h2>
        </template>
        <template #content>
          <div class="field mt-3">
            <span class="p-float-label p-input-icon-right justify-content-center">
              <pv-input-text type="text" id="name" v-model.trim="user.name" required="true" :class="{ 'p-invalid': submitted && !user.name }" />
              <label for="name"> Name </label>
            </span>
          </div>
          <div class="field mt-5">
            <span class="p-float-label p-input-icon-right">
              <pv-input-text type="textarea" id="lastname" v-model.trim="user.lastName" required="true" :class="{ 'p-invalid': submitted && !user.lastName }" />
              <label for="lastname"> Last Name </label>
            </span>
          </div>
          <div class="field mt-5">
            <span class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <pv-input-text type="textarea" id="email" v-model.trim="user.email" required="true" aria-describedby="email-error" :class="{ 'p-invalid': submitted && !user.email }"/>
              <label for="email"> Email </label>
            </span>
          </div>
          <div class="field mt-5 ">
            <div class="p-float-label ">
              <pv-password id="password" v-model.trim="user.password" toggleMask :class="{ 'p-invalid': submitted && !user.password }">
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
              <label for="password">Password</label>
            </div>
          </div>
          <div class="field mt-5">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-phone" />
              <pv-input-mask id="phone" mask="(051) 999-999-999" v-model.trim="user.phone" placeholder="(051) 999-999-999" :class="{ 'p-invalid': submitted && !user.phone }"/>
            </div>
          </div>
          <div class="field mt-5">
            <pv-calendar id="birthday" v-model="user.birthday"  :showIcon="true" :class="{ 'p-invalid': submitted && !user.birthday }"/>
          </div>
        </template>
        <template #footer>
          <pv-button  label="Submit" class="mt-2 ml-7 p-button-rounded" @click="openDialog" />
        </template>
      </pv-card>
    </div>
    <pv-dialog
        v-model:visible="showMessage"
        :breakpoints="{ '960px': '80vh' }"
        :style="{ width: '30vw' }"
        position="center"
        :modal="true"
    >
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i
            class="pi pi-check-circle"
            :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
        ></i>
        <h5>Registration Successful!</h5>
        <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
          Your account is registered under name <b>{{ user.name }}</b> ; it'll be
          valid newt 30 days without activation. Please check
          <b>{{ user.email }}</b> for activation instructions.
        </p>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <a href="/User"><pv-button label="OK" @click="toggleDialog" class="p-button-text" ref="/home"/></a>
        </div>
      </template>
    </pv-dialog>
  </div>
</template>

<script>


import { UsersApiService } from "../../user/services/users-api.service";

export default {

  name: "RegisterFView",

  data() {
    return {
      submitted: false,
      showMessage: false,
      user: {},
      users: [],
      usersService: null,
    };
  },
  created() {
    this.usersService = new UsersApiService();
    this.usersService.getAll().then((response) => {
      this.users = response.data;
      console.log("created");
    });
  },
  methods: {
    getStorableUser(displayableUser) {
      return {
        id: displayableUser.id,
        name: displayableUser.name,
        lastName: displayableUser.lastName,
        phone: displayableUser.phone,
        email: displayableUser.email,
        password: displayableUser.password,
        birthday: displayableUser.birthday
      };
    },

    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = "";
      this.lastName = "";
      this.phone = "";
      this.email = "";
      this.password = "";
      this.birthday = null;
      this.submitted = false;
    },
    editUser(user) {
      console.log(user);
      this.user = { ...user };
      console.log(this.user);
    },
    findIndexById(id) {
      return this.users.findIndex((user) => user.id === id);
    },

    openDialog() {
      this.submitted = true;
      if (
        this.user.name.trim() &&
        this.user.email.trim() &&
        this.user.password.trim() &&
        this.user.phone.trim()
      ) {
        if (this.user.id) {
          this.user = this.getStorableUser(this.user);
          this.usersService
              .update(this.user.id, this.user)
        } else {
          this.user.id = 0;
          console.log(this.user);
          this.user = this.getStorableUser(this.user);
          this.usersService.create(this.user).then((response) => {
            this.users.push(this.user);
            console.log(response);
          });
        }
        this.user = {};
        this.showMessage = true;
      }

    }
  }
};
</script>

<style scoped>
.form-demo{
  margin-top: 4%;
}
</style>
