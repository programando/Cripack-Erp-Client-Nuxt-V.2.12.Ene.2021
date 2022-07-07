<template>
  <div>
    <div class="border mr-2">
      <h2 class="bg-azul text-white w-40 text-center py-1 text-sm">{{ data.cfecha || formatDate }}</h2>
      <!-- estado am -->
      <button v-if="data.estado_am == 'DISPONIBLE' " @click="modalAm = true" class="w-40 block h-16 border border-b border-t" :class="[setColorAm]" >
        <div class="text-xs" >{{data.texto_am}}</div>
      </button>
      <button v-else class="w-40 block h-16 border border-b border-t" :class="[setColorAm]" >
        <div class="text-xs" >{{data.texto_am}}</div>
      </button>

      <!-- estadopm -->
      <button v-if="data.estado_pm == 'DISPONIBLE' " @click="modalPm = true" class="w-40 block h-16 border border-b border-t" :class="[setColorAm]" >
        <div class="text-xs" >{{data.texto_pm}}</div>
      </button>
      <button v-else class="w-40 block h-16 border" :class="[setColorPm]">
        <div class="text-xs" >{{data.texto_pm}}</div>
      </button>
    </div>


    <!-- modal Am -->
    <div
      v-show="modalAm"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div class="max-w-6xl p-6 mx-4 bg-white rounded-md shadow-xl">
        <div class="flex items-center justify-end">
          <svg
            @click="modalAm = false"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-red-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1 class="text-lg text-azul mt-4 text-center font-semibold">Agendamiento de asistencias en máquinas</h1>
          <div class="mt-4 flex space-x-10">
            <div class="">
               <client-only>
                <label for="desde" class="text-sm mr-1">Servicio a prestar desde: </label>
                <date-picker v-model="fechaIni" valueType="format" id="desde"></date-picker>
              </client-only>
            </div>
           
            <div>
              <client-only>
                <label for="hasta" class="text-sm mr-1">hasta: </label>
                <date-picker v-model="fechaFin" valueType="format" id="hasta"></date-picker>
              </client-only>
            </div>
          </div>
          <div>
            <div class="flex space-x-2 mt-4">
              <label class="w-40 text-sm" for="cliente">Cliente: </label>
              <button @click="buscarCliente = true">
                <img class="h-6" src="/images/prismaticos.png" alt="" />
              </button>
              <input
                class="w-32 px-2 py-1 text-xs text-center border rounded-sm focus:outline-none"
                type="text"
                id="cliente"
                v-model="idTercero"
                @keyup.enter="buscarClientePorCodigo"
              />
              <input class="border focus:outline-none ancho1 px-2" type="text">
            </div>
            <div class="flex space-x-2 mt-4">
              <label class="w-40 text-sm" for="cliente">Servicio prestado por: </label>
              <button @click="buscarCliente = true">
                <img class="h-6" src="/images/prismaticos.png" alt="" />
              </button>
              <input
                class="ancho2 px-2 py-1 text-xs text-center border rounded-sm focus:outline-none"
                type="text"
                id="cliente"
                v-model="idTerceroOperario"
                @keyup.enter="buscarClientePorCodigo"
              />
              
            </div>
            <!-- actividades Am -->
            <div class="mt-6 text-sm flex items-center space-x-10 flex-wrap mx-20 lg:mx-0 formulario">
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" id="acompanamiento"  v-model="acompanamientoAm">
                  <label for="acompanamiento">Acompañamiento</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" name="" id="limpieza"  v-model="limpiezaAm" >
                  <label for="limpieza">Limpieza</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" name="" id="mejoramiento"  v-model="mejoramientoAm"  >
                  <label for="mejoramiento">Mejoramiento</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" name="" id="certificadoCalidad"  v-model="nivelacionAm" >
                  <label for="certificadoCalidad">Nivelación</label>
                </div>
              </div>
              <div class="flex items-center space-x-10 mt-4">
                <label class="text-sm w-40" for="serviciosAm text-sm">Servicios en la Mañana</label>
                <textarea v-model="actividadAm" class="border focus:outline-none px-4 text-sm" name="" id="serviciosAm" cols="48" rows="2"></textarea>
              </div>
            <!-- avtividades Pm -->
              <div class="mt-6 text-sm flex items-center space-x-10 flex-wrap mx-20 lg:mx-0 formulario">
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" id="acompanamiento"  v-model="acompanamientoPm">
                  <label for="acompanamiento">Acompañamiento</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" name="" id="limpieza"  v-model="limpiezaPm" >
                  <label for="limpieza">Limpieza</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" name="" id="mejoramiento"  v-model="mejoramientoPm"  >
                  <label for="mejoramiento">Mejoramiento</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full"  type="checkbox" name="" id="certificadoCalidad"  v-model="nivelacionPm" >
                  <label for="certificadoCalidad">Nivelación</label>
                </div>
              </div>
              <div class="flex items-center space-x-10 mt-4">
                <label class="text-sm w-40" for="serviciosPm">Servicios en la tarde</label>
                <textarea v-model="actividadPm" class="border focus:outline-none px-4 text-sm" name="" id="serviciosPm" cols="48" rows="2"></textarea>
              </div>

              <div class="flex justify-end space-x-10 mt-10">
                  <button @click="guardarDatos" class="border px-6 py-1 bg-azul text-white rounded-lg">Gabrar</button>
                  <button @click="modalAm = false" class="border px-6 py-1 bg-azul text-white rounded-lg mr-4" >Salir</button>
              </div>
          </div>
        </div>
      </div>
    </div>


    <!-- modal Pm -->
    <div
      v-show="modalPm"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl mr-20">Model Pm</h3>
          <svg
            @click="modalPm = false"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-red-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1>Modal Pm</h1>
        </div>
      </div>
    </div>







    <!-- modal buscarCliente -->
    <div v-if="buscarCliente">
      <BuscarCliente @getIdTerceroCliente = "getIdTerceroCliente" />
    </div>
  </div>
</template>

<script>
import BuscarCliente from '@/components/modals/BuscarCliente.vue'
export default {
  name: "ProgramacionAsistenciaMaquinas",
  props: {
    data: Object
  },
  components: {
    BuscarCliente
  },

  data() {
    return {
      modalAm: false,
      modalPm: false,
      buscarCliente: false,

      fechaIni: '',
      fechaFin: '',
      idTercero: '',
      idTerceroOperario: '',

      acompanamientoAm: false,
      limpiezaAm: false,
      mejoramientoAm: false,
      nivelacionAm: false,
      actividadAm: '',

      acompanamientoPm: false,
      limpiezaPm: false,
      mejoramientoPm: false,
      nivelacionPm: false,
      actividadPm: '',

      datos: {}
    }
  },

  methods: {
    getIdTerceroCliente() {
      this.buscarCliente = false
    },

    guardarDatos() {
      this.datos = {
        fechaIni: this.fechaIni,
        fechaFin: this.fechaFin,
        actividadAm: this.actividadAm,
        actividadPm: this.actividadPm
      }



      console.log(this.datos)
    }
  },

  computed: {
    setColorAm() {
      switch (this.data.estado_am) {
        case "NO DISPONIBLE":
          return "bg-calendarioAmarillo"
          break;
        case "RESERVADA":
          return "bg-calendarioVerde"
        
        
      }
    },
    setColorPm() {
      switch (this.data.estado_pm) {
        case "NO DISPONIBLE":
          return "bg-calendarioAmarillo"
          break;
        case "RESERVADA":
          return "bg-calendarioVerde"
        
        
      }
    },

    setServiciosAm() {
      if (this.acompanamientoAm == true ) {
        this.actividadAm = 'Acompañamiento '
      } else {
        this.actividadAm = ''
      }

      if (this.limpiezaAm == true ) {
        this.actividadAm = this.actividadAm + 'Limpieza '
      } 

      if(this.mejoramientoAm == true) {
        this.actividadAm = this.actividadAm + 'Mejoramiento '
      }

      if (this.nivelacionAm == true) {
        this.actividadAm = this.actividadAm + 'Nivelación '
      }

    },

    setServiciosPm() {
      if (this.acompanamientoPm == true ) {
        this.actividadPm = 'Acompañamiento '
      } else {
        this.actividadPm = ''
      }

      if (this.limpiezaPm == true ) {
        this.actividadPm = this.actividadPm + 'Limpieza '
      } 

      if(this.mejoramientoPm == true) {
        this.actividadPm = this.actividadPm + 'Mejoramiento '
      }

      if (this.nivelacionPm == true) {
        this.actividadPm = this.actividadPm + 'Nivelación '
      }

    }
      

  },
};
</script>

<style scoped>

.ancho1 {
  width: 350px;
}

.ancho2 {
  width: 487px;
}



/* checkbox */
/* .formulario h2 {
    font-size: 16px;
    color: #001F3F;
    margin-bottom: 20px;
    margin-left: 20px; 
}

.formulario > div {
    padding: 20px 0;
    
}
  
  .formulario .checkbox label {
    display: inline-block;
    cursor: pointer;
    color: #002C76;
    position: relative;
    padding: 5px 15px 5px 51px;
    font-size: 1em;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease; 
  }

  
  .formulario .checkbox label:hover {
      background: rgba(255, 65, 54, 0.1); 
  }

  
  .formulario .checkbox label:before {
      content: "";
      display: inline-block;
      width: 17px;
      height: 17px;
      position: absolute;
      left: 15px;
      border-radius: 50%;
      background: none;
      border: 3px solid #002C76;
  }


  .formulario .checkbox label:before {
    border-radius: 3px;
  }

  .formulario .checkbox input[type="checkbox"] {
    display: none;   
  }

  .formulario .checkbox input[type="checkbox"]:checked + label:before {
    display: none;
  }

  .formulario .checkbox input[type="checkbox"]:checked + label {
    background: #002C76;
    color: #fff;
    padding: 5px 15px; 
  } */

</style>
