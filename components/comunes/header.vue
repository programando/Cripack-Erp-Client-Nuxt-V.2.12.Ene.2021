<template>
  <div class="fixed z-10 flex items-center justify-between w-full mt-0 bg-azul ">
    <div class="flex">
      <img class="h-20" src="/images/logo.png" alt=""/>
      <div class="mt-4 ml-4 text-white">
         <h3 class="font-semibold"> {{ companyName }}</h3>
        <h3 class="font-semibold"> {{ contactName }}</h3>   
      </div>
    </div>
    
    <div class="flex mr-4 space-x-6">
       <NavLinks  text="Historial" to="/clientes/ots-historial" />
      
<!--        <div class="relative text-white">
         <button @click="menu = !menu" class="px-2 font-semibold">Solicitud OT</button>
         <div v-if="menu" class="absolute z-20 flex flex-col pb-2 text-sm border border-white rounded-md top-7 w-28 bg-azul">
           <div @click="menu = !menu" class="mt-2 hover:opacity-90">
             <nuxt-link  class="px-2 py-1 text-white " to="/clientes/ordenes-trabajo/troquel-plano">Troquel Plano</nuxt-link>
           </div>
           <div @click="menu = !menu" class="mt-2 hover:opacity-90">
             <nuxt-link  class="px-2 py-1 text-white " to="/clientes/ordenes-trabajo/troquel-plano">Troquel Plano</nuxt-link>
           </div>
           <div @click="menu = !menu" class="mt-2 hover:opacity-90">
             <nuxt-link  class="px-2 py-1 text-white " to="/clientes/ordenes-trabajo/troquel-plano">Troquel Plano</nuxt-link>
           </div>
         </div>
       </div> -->

      <NavLinks  text="Estado OT's" to="/clientes/ots-estado" />



      <NavLinks 
        text="Braille"
        to="/clientes/ordenes-trabajo/braile"
      />
      <NavLinks text="Contacto"  to="/clientes/contact"  />
      
      
<!--       <NavLinks 
        text="Comercial"
        to="/clientes/ordenes"
      /> -->
       <button @click="logout" class="font-semibold text-white"> Salir </button> 
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

  data() {
    return {
      menu: false
    }
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
