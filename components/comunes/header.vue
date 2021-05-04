<template>
  <div class="fixed z-10 flex items-center justify-between w-full mt-0 bg-azul ">
    <div class="flex">
      <img class="h-20" src="/images/logo.png" alt=""/>
      <div class="mt-4 ml-4 text-white">
<!--          <h3 class="font-semibold"> {{ companyName }}</h3>
        <h3 class="font-semibold"> {{ contactName }}</h3>  --> 
      </div>
    </div>
    <div class="flex mr-4 space-x-6">
      <NavLinks 
        text="Historial"
        to="/customers/ots-historial"
      />
      <NavLinks 
        text="Estado OT's"
        to="/"
      />
      <NavLinks 
        text="Ventas"
        to="/dashboard/ventas"
      />
      <NavLinks 
        text="Braille"
        to="/"
      />
      <NavLinks 
        text="Contacto"
        to="/customers/contact"
      />
      <NavLinks 
        text="Comercial"
        to="/"
      />
       <button @click="logout" class="text-white"> Salir </button> 
    </div>
  </div>
</template>

<script>
import NavLinks from '@/components/comunes/navLinks'
import User from "@/models/User";
export default {
  name: "Header",
  components: {
    NavLinks
  },
  computed:{
        companyName() {
            return this.$cookies.get('User').nomtercero;
        },
        contactName() {
          return this.$cookies.get('User').nombre_usuario;
        },
  },
  methods: {
      logout() {
        User.logout()
        .then( () => {
            this.$cookies.removeAll();
            this.$cookies.set('logueado', false);
            this.$store.dispatch('User/UserLogout');
            this.$router.push('/');
        })
      },
  }
  

};
</script>

<style>

</style>
