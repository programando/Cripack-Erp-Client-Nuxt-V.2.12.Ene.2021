<template>
 
  <div class="text-sm font-Montserrat">
    <div
      class="fixed z-50 flex items-center justify-between w-full mt-0 bg-azul "
    >
      <div class="flex">
        <img class="h-20" src="/images/logo.png" alt="" />
        
      </div>
      <div class="flex -mt-8 space-x-6 text-white">
          <h3 class="text-sm">{{ companyName }}</h3>
          <h3 class="text-sm">{{ contactName  }} DILIA CASTRO</h3>
      </div>

      <div class="flex items-center justify-end mr-4 space-x-6">
        <NavLinks text="Historial" to="/clientes/ots-historial" />

         <div v-if="isDevelopment=='development'" class="relative text-white">
          <button @click="menu = !menu" class="px-2 ">
            Solicitud OT
          </button>
          <div
            v-if="menu"
            class="absolute z-20 flex flex-col pb-2 text-sm border border-white rounded-md top-7 w-28 bg-azul"
          >
            <div @click="menu = !menu" class="mt-2 hover:opacity-90">
              <nuxt-link
                class="px-2 py-1 text-xs text-white "
                to="/clientes/ordenes-trabajo/troquel-plano"
                >Troquel Plano</nuxt-link
              >
            </div>
            <div @click="menu = !menu" class="mt-2 hover:opacity-90">
              <nuxt-link
                class="px-2 py-1 text-xs text-white"
                to="/clientes/ordenes-trabajo/troquel-plano"
                >Troquel Curvo</nuxt-link
              >
            </div>
            <div @click="menu = !menu" class="mt-2 hover:opacity-90">
              <nuxt-link
                class="px-2 py-1 text-xs text-white"
                to="/clientes/ordenes-trabajo/troquel-plano"
                >Descartone</nuxt-link
              >
            </div>
          </div>
        </div>  

        <NavLinks text="Estado OT's" to="/clientes/ots-estado" />

        <!--       <NavLinks 
        text="Braille"
        to="/clientes/ordenes-trabajo/braile"
      /> -->
        <NavLinks text="Contacto" to="/clientes/contacto" />

        <!--       <NavLinks 
        text="Comercial"
        to="/clientes/ordenes"
      /> -->
 
        <button @click="logout" class="text-white ">Salir</button>
      </div>
 
    </div>
    <div class="fixed right-0 z-10 pt-16 bandera">
         <LanguajeChange
              tipoTransicion='arriba'>
         </LanguajeChange>
    </div>

  </div>
</template>

<script>
import LanguajeChange     from "@/components/htmlControls/languajeChange";
import NavLinks           from "@/components/comunes/navLinks";
import User               from "@/models/User";
export default {
  name: "Header",
  components: {  NavLinks, LanguajeChange  },

  data() {
    return {
      idioma: false,
      menu  : false,
      isDevelopment : process.env.NODE_ENV,
    };
  },
  computed: {
    companyName() {
      return this.$cookies.get("User").nomtercero;
    },
    contactName() {
      return this.$cookies.get("User").nombre_usuario;
    }
  },
  methods: {
    logout() {
        User.logout( this.$cookies.get("User").idtercero).then(() => {
        this.$cookies.removeAll();
        this.$cookies.set("logueado", false);
        this.$store.dispatch("User/UserLogout");
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
.bandera {
  margin-right: 20px;
  
}
</style>
