<template>
  <div class="relative px-10 mt-4">
    <label class="mr-4" for="">Buscar Cliente</label>
    <input
      type="text"
      v-model="nuevoCliente"
      class="border focus:outline-none px-4 rounded-lg text-sm"
      placeholder="codigo, nombre o alias"
      @keyup="buscarCliente"
    />
    <h2 v-if="nomSelected" class="text-center mt-6 text-sm font-semibold">{{ nomSelected }}</h2>
    <div class="mt-10 -ml-20 absolute top-0 bg-gray-100 border z-50 rounded">
      <!-- <select class="text-xs p-2" v-if="clientes.length > 0" v-model="idTercero" @change="getIdTerceroCliente()">
        <option class="text-xs p-4" v-for="cliente in clientes" :key="cliente.idtercero"
              :value="cliente.idtercero"  >
             {{ cliente.codigo_tercero }} -   {{ cliente.nomtercero }} | {{ cliente.alias }}
        </option>
 
     </select> -->

      <ul v-if="clientes.length > 0" class="text-xs h-96 overflow-y-auto ancho">
        <li
          class="px-10 py-2 cursor-pointer"
          v-for="cliente in clientes"
          :key="cliente.idtercero"
          @click="getIdTerceroCliente(cliente.idtercero, cliente.nomtercero, cliente.identificacion)"
        >
          {{ cliente.codigo_tercero }} - {{ cliente.nomtercero }} |
          {{ cliente.alias }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TercerosClientes from "@/models/Terceros";

export default {
  name: "FiltroClientes",
  data() {
    return {
      clientes: [],
      nuevoCliente: "",
      idTercero: 0,
      nomSelected: "",
       
    };
  },

  methods: {
    buscarCliente() {
      TercerosClientes.busquedaPorNitCodNombreSucursal(this.nuevoCliente).then(
        (response) => {
          this.clientes = response.data;
        }
      );
    },

    getIdTerceroCliente(IdTercero, nomtercero, identificacion) {
      let OtsPendientes , TotalCartera ;
      TercerosClientes.clientesResumenDashBoard ( identificacion)
      .then( response => {
          OtsPendientes  = response.data[0].OtsPendientes;
          TotalCartera  =  response.data[0].TotalCartera;
          this.$emit("getIdTerceroCliente", IdTercero, nomtercero, identificacion, OtsPendientes, TotalCartera);
          this.clientes    = [];
          this.nomSelected = nomtercero;
      })
     

    },
  },

  /* computed: {
        filterResults () {
            if (this.nuevoCliente != '') {
              return this.clientes.filter(e => e.name.toLowerCase().startsWith(this.nuevoCliente.toLowerCase()));
            } else {
              return []
            }            

        } 
  },
  */
};
</script>

<style scoped>
.ancho {
  width: 600px;
}
</style>