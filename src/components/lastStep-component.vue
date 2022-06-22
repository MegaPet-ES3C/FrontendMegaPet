<template>
  <div class="flex align-items-center flex-column justify-content-center pt-8">
    <i
        class="pi pi-check-circle"
        :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
    ></i>
    <h1>Registration Successful!</h1>
    <p>
      Thanks for your registration ! Now you can enjoy our app web. You'll receive an email () to confirm your account
    </p>
  </div>
</template>

<script>
export default {
  name: "lastStep-component",
  methods: {
    nextPage() {
      this.$emit("next-page",{
        formData: {},
        pageIndex: 2,
      })
    }
  }
}
</script>

<style scoped>

</style>