<template>
  <div>
    <pv-button icon="pi pi-home" class="p-button-rounded p-button-primary ml-7" @click="$router.push(':/')"/>
    <Toast/>
    <div class="card">
      <pv-steps :model="items" :readonly="true" />
    </div>
    <router-view>
      <keep-alive >
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "RegisterShelterFView",
  data(){
    return {
      items: [{
        label: 'Personal',
        to: '/'
      },
        {
          label: 'Seat',
          to: '/seat'
        },
        {
          label: 'Payment',
          to: '/payment'
        },
        {
          label: 'Confirmation',
          to: '/confirmation'
        }],
      formObject: {}
    }
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }

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