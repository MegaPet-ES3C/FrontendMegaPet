<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="black lighten-2" dark v-bind="attrs" v-on="on" @click="dialog= true"> Editar Info
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Editar Info de Mascota
        </v-card-title>

        <v-card-text>
          <div>
            <h3>Amor y Rescate</h3>
            <v-img
              lazy-src="https://scontent.flim29-1.fna.fbcdn.net/v/t1.6435-9/123666179_2809991672580831_6851902317457717295_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHaWvUmpnG0tBbiDhJxTsL2sbRwdveC7zmxtHB294LvOdeBAcxMpweWyZWOsma4vB5lM5bnexENtUg-X-3ItCrx&_nc_ohc=t6d-xy-9DKgAX9WwpAI&_nc_ht=scontent.flim29-1.fna&oh=00_AT_syByKkdHW0SumOoaDDyuW1ODoVklMGd6b4AGKZwor3w&oe=6297D405"
              max-height="150"
              max-width="250"
              src="https://scontent.flim29-1.fna.fbcdn.net/v/t1.6435-9/123666179_2809991672580831_6851902317457717295_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHaWvUmpnG0tBbiDhJxTsL2sbRwdveC7zmxtHB294LvOdeBAcxMpweWyZWOsma4vB5lM5bnexENtUg-X-3ItCrx&_nc_ohc=t6d-xy-9DKgAX9WwpAI&_nc_ht=scontent.flim29-1.fna&oh=00_AT_syByKkdHW0SumOoaDDyuW1ODoVklMGd6b4AGKZwor3w&oe=6297D405"
            ></v-img>
            <h6>Editar Informaciòn</h6>
          </div>
          <v-form>
            <v-img
              lazy-src="https://okdiario.com/img/2019/12/03/-cuando-comenzar-a-educar-a-tu-cachorro_-1-655x368.jpg"
              max-height="150"
              max-width="250"
              src="https://okdiario.com/img/2019/12/03/-cuando-comenzar-a-educar-a-tu-cachorro_-1-655x368.jpg"
            ></v-img>
            <v-text-field v-model="Nombre" label="Nombre" prepend-icon="mdi-attachment"></v-text-field>
            <v-text-field v-model="Salud" label="Salud" prepend-icon="mdi-attachment"></v-text-field>
            <v-text-field v-model="Statura" label="Statura" prepend-icon="mdi-attachment"></v-text-field>
            <v-textarea v-model="Description" label="Descripciòn de la mascota" prepend-inner-icon="mdi-comment"></v-textarea>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Aceptar
          </v-btn>
          <v-btn color="primary" @click="dialog = false">Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  data () {
    return {
      dialog: false,
      Nombre: "",
      Salud: "",
      Statura: "",
      description:""
    }
  },
}
</script>


<style scoped>

</style>