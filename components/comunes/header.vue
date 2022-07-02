<template>
  <div class="text-sm">
    <div
      class="fixed z-50 flex items-center justify-between w-full mt-0 bg-azul "
    >
      <div class="flex">
        <img class="lg:h-16 h-10 lg:ml-4 min-w-24" src="/images/LogoCripaack.png" alt="" />
      </div>
      <div class="flex items-center justify-end mr-4 space-x-8"  v-on-clickaway="closeMenu">
        <NavLinks text="Historial" to="/clientes/ots-historial" />
        <NavLinks text="Estado Ot's" to="/clientes/ots-estado" />
        <div  class="relative text-white">
          <button @click="viewUtilidades" @focus="menu = false" class="px-2 text-sm ">
            Utilidades clientes
          </button>
          <div
            v-if="menu"
            class="absolute z-20 flex flex-col w-40 pb-2 text-sm border border-white rounded-md top-7 bg-azul"
          >
           
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
                  class="px-2 py-1 text-sm text-white"
                  to="/clientes/ordenes-trabajo/troquel-plano"
                  >Plano</nuxt-link
                >
              
              <!--  <nuxt-link
                  class="px-2 py-1 text-sm text-white"
                  to="/clientes/ordenes-trabajo/troquel-plano"
                  >Curvo</nuxt-link
                >
                <nuxt-link
                  class="px-2 py-1 text-sm text-white"
                  to="/clientes/ordenes-trabajo/troquel-plano"
                  >Descartone</nuxt-link
                >
                -->
              </div>

            </div>

         

   


            <div
              @click="menu = false"
              class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"
            >
              <nuxt-link to="/braile/transcripcion-texto"
                >Transcriptor Braile</nuxt-link
              >
            </div>

 
            <div
              @click="menu = false"
              class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"
            >
              <nuxt-link to="/clientes/agendamiento-asistencia"
                >Agendamiento asistencia</nuxt-link
              >
            </div>
 
          </div>
        </div>

        <div v-if="esUsuarioCripack" class="relative text-white">
          <button @click="viewGestion" class="px-2 text-sm ">
            Gestión comercial
          </button>
          <div
            v-if="gestion"
            class="absolute z-20 flex flex-col w-48 pb-2 text-sm border border-white rounded-md top-7 bg-azul"
          >
        
             <div class="relative mx-2 mt-2 cursor-pointer hover:opacity-90" @click="gestion = false" >
              <nuxt-link to="/clientes/registro-visitas">Registro visita cliente</nuxt-link>
            </div>

            <div @click="gestion = false" class="relative mx-2 mt-2 cursor-pointer hover:opacity-90" >
              <nuxt-link to="/gestion/documentos" >Consulta documentos</nuxt-link >
            </div>


            <div class="relative mx-2 mt-2 cursor-pointer hover:opacity-90" @click="gestion = false" >
              <nuxt-link to="/clientes/costos" >Costos alistamiento</nuxt-link >
            </div>

            <!--
            <div  @click="gestion = false"  class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"  >
              <nuxt-link to="/gestion/datos-caja-maquina">Análisis opciones contra hendido</nuxt-link>
            </div>
              -->
              
          </div>
        </div>
        <NavLinks text="Contacto" to="/clientes/contacto" />

        <div class="relative text-white">
          <button @click="viewUser" class="px-2 text-sm ">
            <img class="w-24 h-10" src="/images/LogoCripaack.png" alt="logo">
          </button>
          <div
            v-if="userOptions"
            class="absolute right-0 z-20 flex flex-col w-48 pb-2 text-sm border border-white rounded-md top-10 bg-azul"
          >
        
             <div class="relative mx-2 mt-2 cursor-pointer hover:opacity-90 py-2">
              <p >{{ contactName }}</p>
            </div>

            <div @click="gestion = false" class="relative mx-2 mt-2 cursor-pointer hover:opacity-90 py-2" >
              <p>Cambiar imagen</p >
            </div>


            <div class="relative mx-2 mt-2 cursor-pointer hover:opacity-90 py-2">
              <button @click="logout">Cerrar Sistema</button>
            </div>

            <!--
            <div  @click="gestion = false"  class="relative mx-2 mt-2 cursor-pointer hover:opacity-90"  >
              <nuxt-link to="/gestion/datos-caja-maquina">Análisis opciones contra hendido</nuxt-link>
            </div>
              -->
              
          </div>
        </div>
      </div>
    </div>
    <div class="fixed right-0 z-10 pt-16 bandera">
      <LanguajeChange tipoTransicion="arriba"> </LanguajeChange>
    </div>
  </div>
</template>

<script>
import LanguajeChange       from "@/components/htmlControls/languajeChange";
import NavLinks             from "@/components/comunes/navLinks";
import User                 from "@/models/User";
export default {
  name: "Header",
  components: { NavLinks, LanguajeChange },

  data() {
    return {
      idioma       : false,
      menu         : false,
      isDevelopment: process.env.NODE_ENV,
      subMenu      : false,
      gestion      : false,
      userOptions: false,

      
 
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
      this.userOptions = false
    },
    viewGestion(){
      this.gestion = !this.gestion
      this.menu = false
      this.userOptions = false
    },

    closeMenu() {
      this.menu = false,
      this.subMenu = false,
      this.gestion = false,
      this.userOptions = false
    },

    viewUser() {
      this.userOptions = !this.userOptions
      this.menu = false,
      this.gestion = false
    }
  }
};
</script>

<style>
.bandera {
  margin-right: 20px;
}
</style>
