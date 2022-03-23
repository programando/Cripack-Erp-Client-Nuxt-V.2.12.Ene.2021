<template>
  <div class="text-sm font-Montserrat">
    <div
      class="fixed z-50 flex items-center justify-between w-full mt-0 bg-azul "
    >
      <div class="flex">
        <img class="h-20" src="/images/logo.png" alt="" />
      </div>
      <div class="flex ml-20 -mt-8 space-x-6 text-white">
        <h3 class="text-sm">{{ companyName }}</h3>
        <h3 class="text-sm">{{ contactName }}  </h3>
      </div>

      <div class="flex items-center justify-end mr-4 space-x-12">
        <NavLinks text="Historial" to="/clientes/ots-historial" />

        <NavLinks text="Estado Ot's" to="/clientes/ots-estado" />

        <div  class="relative text-white">
          <button @click="viewUtilidades" class="px-2 text-lg">
            Utilidades
          </button>
          <div
            v-if="menu"
            class="absolute z-20 flex flex-col w-40 pb-2 text-sm border border-white rounded-md top-7 bg-azul"
          >
           <!--
            <div
              @click="subMenu = !subMenu"
              class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"
              v-if="menu"
            >
              Solicitud OT
              <div
                @click="menu = false"
                v-if="subMenu"
                class="absolute z-20 flex flex-col w-40 pb-2 -ml-3 text-sm border border-white rounded-md left-40 bg-azul"
              >
                <nuxt-link
                  class="px-2 py-1 text-xs text-white"
                  to="/clientes/ordenes-trabajo/troquel-plano"
                  >Plano</nuxt-link
                >
                <nuxt-link
                  class="px-2 py-1 text-xs text-white"
                  to="/clientes/ordenes-trabajo/troquel-plano"
                  >Curvo</nuxt-link
                >
                <nuxt-link
                  class="px-2 py-1 text-xs text-white"
                  to="/clientes/ordenes-trabajo/troquel-plano"
                  >Descartone</nuxt-link
                >
              </div>

            </div>

          -->


            <div
              @click="menu = false"
              class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"
            >
              <nuxt-link to="/braile/transcripcion-texto"
                >Transcriptor Braile</nuxt-link
              >
            </div>
          </div>
        </div>

        <div v-if="esUsuarioCripack" class="relative text-white">
          <button @click="viewGestion" class="px-2 text-lg">
            Gestión
          </button>
          <div
            v-if="gestion"
            class="absolute z-20 flex flex-col w-48 pb-2 text-sm border border-white rounded-md top-7 bg-azul"
          >
            <div
              class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"
              @click="gestion = false"
            >
              <nuxt-link to="/clientes/costos"
                >Costos alistamiento</nuxt-link
              >
              
            </div>
             
            <div
              @click="gestion = false"
              class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"
            >
              <nuxt-link to="/gestion/datos-caja-maquina"
                >Cito vs Pertinax</nuxt-link
              >
            </div>

            <div
              @click="gestion = false"
              class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"
            >
              <nuxt-link to="/gestion/documentos"
                >Consulta documentos</nuxt-link
              >
            </div>



          </div>
        </div>

        <!-- <NavLinks text="Estado OT's" to="/clientes/ots-estado" /> -->

        <NavLinks text="Contacto" to="/clientes/contacto" />

        <!--       <NavLinks 
        text="Comercial"
        to="/clientes/ordenes"
      /> -->

        <button @click="logout" class="text-lg text-white">Salir</button>
      </div>
    </div>
    <div class="fixed right-0 z-10 pt-16 bandera">
      <LanguajeChange tipoTransicion="arriba"> </LanguajeChange>
    </div>
  </div>
</template>

<script>
import LanguajeChange from "@/components/htmlControls/languajeChange";
import NavLinks from "@/components/comunes/navLinks";
import User from "@/models/User";
export default {
  name: "Header",
  components: { NavLinks, LanguajeChange },

  data() {
    return {
      idioma       : false,
      menu         : false,
      isDevelopment: process.env.NODE_ENV,
      subMenu      : false,
      gestion      : false 
 
    };
  },
 
  computed: {
    companyName() {
      return this.$cookies.get("User").nomtercero;
    },
    contactName() {
      return this.$cookies.get("User").nombre_usuario;
    },
    esUsuarioCripack() {
        return this.$cookies.get("User").uso_web_empresa;   
    },
  },
  methods: {
    logout() {
      User.logout(this.$cookies.get("User").idtercero).then(() => {
        this.$cookies.removeAll();
        this.$cookies.set("logueado", false);
        this.$store.dispatch("User/UserLogout");
        this.$router.push("/");
      });
    },

    viewUtilidades(){
      this.menu = !this.menu
      this.gestion = false
    },
    viewGestion(){
      this.gestion = !this.gestion
      this.menu = false
    }
  }
};
</script>

<style>
.bandera {
  margin-right: 20px;
}
</style>
