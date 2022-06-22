<template>
  <div>
    <pv-button icon="pi pi-home" class="p-button-rounded p-button-primary ml-7 mt-4 mb-6" @click="$router.push('/Home')"/>
    <div class="card">
      <pv-steps :model="items"  />

    <router-view v-slot="{ Component }" :formData="formObject" @next-page="nextPage($event)"
                 @prev-page="prevPage($event)"
                 >
      <keep-alive >
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <pv-toast></pv-toast>
    </div>
  </div>
</template>

<script>

export default {
  name: "RegisterShelterFView",
  data(){
    return {
      items:
          [
            {
              label: "Personal Information",
              to: "/registerShelter",
            },
            {
              label: "Terms",
              to: "/registerShelter/policy"
            },
            {
              label: "Last Step",
              to: "/registerShelter/lastStep"
            }
          ],
      formObject: {}
    }
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      localStorage.setItem("formObject", JSON.stringify(this.formObject));

      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    complete() {
      this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
    }
  }
}
</script>

<style scoped>

</style>