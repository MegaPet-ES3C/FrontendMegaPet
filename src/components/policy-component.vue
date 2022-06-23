<template>
<div class=" flex justify-content-center">
  <pv-card class="border-none shadow-none bg-transparent">
    <template v-slot:title>
      <pv-button icon="pi pi-arrow-left" class="p-button-rounded p-button-primary p-button-outlined" @click="$router.push('/registerShelter')"/>

      <div class="text-center">Read our terms and then put yes or no</div>
    </template>
    <template v-slot:content>
      <pv-field legend="Terms">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed felis mauris. Nulla convallis ultricies elit. Nullam at sollicitudin tellus. Nunc aliquam congue lacinia. Mauris lobortis erat a nibh porta sodales. In a risus nulla. Aenean semper nibh sagittis porttitor eleifend. Vestibulum rhoncus mauris risus, in pharetra metus finibus id. Integer aliquam, tellus eu fermentum sollicitudin, lacus lacus rhoncus elit, sed cursus quam arcu non nisi. Vestibulum auctor, risus quis viverra aliquam, magna enim vehicula dui, laoreet convallis augue urna quis turpis. Nunc accumsan leo quis purus dapibus porta. Proin accumsan, velit nec pellentesque tincidunt, est libero mollis sapien, vitae fringilla nibh sem eu nunc.

          Etiam placerat diam sit amet mauris aliquam, non finibus tortor volutpat. Vestibulum porttitor felis ligula. Pellentesque non lectus tempor, egestas eros quis, feugiat ex. Etiam sit amet nulla eu felis condimentum tristique id quis arcu. Vestibulum tempus metus et lorem viverra feugiat. Suspendisse facilisis, ante at molestie viverra, dui dolor ultrices magna, eu placerat orci augue ut mauris. Sed nec imperdiet ex. Nunc elit felis, congue aliquam luctus dictum, luctus sed metus. Mauris vestibulum sagittis tellus, sit amet iaculis nunc ultrices in.

          Sed eget justo lobortis, consectetur nibh fringilla, ornare ligula. Proin non lacus et nibh commodo laoreet nec eget ipsum. Morbi at enim porttitor, posuere ligula sed, pharetra odio. Praesent congue tellus erat, vitae semper est lacinia et. Mauris euismod mi turpis, at malesuada sem consequat ut. Vestibulum mattis eget mi ut vulputate. Nullam molestie, dolor id auctor posuere, lectus lorem dapibus eros, eu interdum nibh felis ac ipsum. Vestibulum in augue eu neque volutpat dapibus et eget enim. Sed purus ligula, tristique et commodo in, sagittis in leo. Aliquam malesuada sed velit a fringilla.

          Suspendisse nisl lorem, vestibulum vel feugiat id, suscipit in lacus. Morbi semper sem non neque sagittis, a scelerisque orci maximus. Nunc eleifend consectetur mi, nec lobortis justo dignissim tempus. Aenean tempus mollis dignissim. Vestibulum id aliquet odio. Vestibulum sagittis blandit lacinia. Vestibulum eleifend lorem in felis posuere varius.

          Fusce quis luctus nibh. Nulla tempor, erat eget porta tincidunt, metus nisl mattis enim, at dapibus dui dui in ligula. In tristique feugiat placerat. Ut justo lorem, rhoncus ut posuere eget, maximus vel nisl. Nam consectetur faucibus elit, id lobortis sem accumsan a. Fusce eu justo tempus, consectetur turpis quis, euismod nibh. Duis faucibus fermentum ante vitae varius. Pellentesque sit amet volutpat libero.</p>
      </pv-field>
    </template>
    <template v-slot:footer >
      <div class="flex inline-block align-content-between justify-content-between">
        <div class="field-checkbox">
          <pv-checkbox id="terms" name="terms" v-model="terms" :binary="true" @click="disabled"/>
          <label for="terms">If you are agree with your terms, check the box</label>
        </div>
        <pv-button
            :disabled="terms === false"
            label="Continue"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="nextPage()"
            class="p-button-text ml-8"
        />
      </div>

    </template>
  </pv-card>

</div>
</template>

<script>
export default {
  name: "policy-component",
  data(){
    return{
      terms: false
    }
  },
  methods: {
    nextPage(){
      this.$emit("next-page",{
        formData:{},
        pageIndex: 1,
      })
    },
    disabled(){
      this.terms = true;
    }
  }
}
</script>

<style scoped>

</style>