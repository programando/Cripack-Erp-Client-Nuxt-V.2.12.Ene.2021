<template>
  <div>
    <div
      class="flex items-center p-2 text-white rounded-md mt-4 mr-4 cursor-pointer bg-gradient-to-r from-celesteClaro to-blue-200 border border-celesteClaro"
      @click="modal = true"
    >
      <div class="w-48">
        <h2>{{ cantVisitas}} &nbsp; Visitas</h2>
        <p class="text-xs"> </p>
        <div class="flex items-center mt-4 space-x-4">
          <p class="text-xs"> Contactos recientes</p>
          <p class="text-xs"></p>
        </div>
      </div>
      <div>
        <img class="h-12" src="/images/visitante.png" alt="" />
      </div>
    </div>


    <!-- modal  -->
    <div
      v-if="modal"
      class="absolute left-0 z-20 flex items-center justify-center w-full h-screen  py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative mx-4 mt-4 table bg-white p-10">
        <h2 class="text-center text-azul mb-2 text-lg font-semibold">Visitas</h2>
        <button @click="modal = false">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>
        
        <table class="w-full border-t">

          <thead class="w-full border ">
            <tr class="w-full bg-white text-azul ">
              <th class="w-1/12 text-xs border table-sticky">Fecha </th>
              <th class="w-1/12 text-xs border table-sticky">Persona contacto</th>
              <th class="w-1/12 text-xs border table-sticky"> Motivo visita </th>
              <th class="w-3/12 text-xs border table-sticky">Resultado</th>
              <th class="w-3/12 text-xs border table-sticky"> Siguiente paso </th>
              <th class="w-1/12 text-xs border table-sticky">Próxima visita</th>
              <th class="w-1/12 text-xs border table-sticky">  Detalles </th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="visita in visitas" :key="visita.idregistro">
              <td class="w-1/12 px-2 py-2 text-xs border text-azul">{{visita.fecha_visita | FechaCorta}}</td>
              <td class="w-1/12 px-4 py-2 text-upperxs text-left border">{{visita.contacto}}</td>
              <td class="w-1/12 px-4 py-2 text-upperxs text-left border">{{visita.nommtvovisita}}</td>
              <td class="w-3/12 px-4 py-2 text-xs text-left border">{{visita.short_resultado}}</td>
              <td class="w-3/12 px-4 py-2 text-xs text-left border">{{visita.short_siguiente_paso}}</td>
              <td class="w-1/12 px-4 py-2 text-xs text-left border">{{visita.fecha_proxvisita | FechaCorta }}</td>
              <td class="w-1/12 h-full text-xs text-center border " >
                   <button @click="showDataDetails(visita)" class="h-full">
                        <img class="h-8" src="/images/buscar.png" alt="" />
                   </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

   <div v-if="showDetalleVisita"  >
      <DetalleVisita @closeDetalleVisita = 'closeDetalleVisita' :datosVisita="registroVisita"/>
    </div>

  </div>
</template>

<script>
import DetalleVisita      from '@/components/modals/DetalleVisita.vue'
import TercerosClientes from "@/models/Terceros";
export default {
  name: "CardVisitas",
  components:{DetalleVisita},
  props: {
    title    : String,
    subTitle : String,
    count    : Number,
    status   : String,
    img      : String,
    bg       : String,
    IdTercero: Number,
  },

  data() {
    return {
      modal: false,
      showDetalleVisita: false,
      visitas: [],
      registroVisita:{},
      cantVisitas :0
    }
  },
  watch: {
    IdTercero() {
        TercerosClientes.ultimasVisitas( this.IdTercero)
        .then( response => {
          this.visitas =  response.data;
          this.cantVisitas = this.visitas.length
        })
    }
  },

  methods: {
    closeDetalleVisita() {
      this.showDetalleVisita = false
    },


    showDataDetails ( registroVisita ){
        this.showDetalleVisita = true;
        this.registroVisita    = registroVisita;

    },
 },

}
</script>

<style scoped>
      .table { min-width: 850px;
      }

</style>
