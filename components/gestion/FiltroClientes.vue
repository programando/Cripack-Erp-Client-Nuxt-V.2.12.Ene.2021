<template>

  <div class="relative px-10">
    <label class="mr-4" for="">Buscar Cliente</label>
    <input type="text"  v-model="nuevoCliente" class="border focus:outline-none px-4 rounded-lg  text-sm" placeholder="codigo, nombre o alias" @keyup="buscarCliente">
    <div class="mt-10 absolute top-4 bg-gray-100 border z-50  rounded">
    
    <select class="text-xs p-2" v-if="clientes.length > 0" v-model="idTercero" @change="getIdTerceroCliente()">
        <option class="text-xs p-4" v-for="cliente in clientes" :key="cliente.idtercero"
              :value="cliente.idtercero"  >
             {{ cliente.codigo_tercero }} -   {{ cliente.nomtercero }} | {{ cliente.alias }}
        </option>
 
     </select>

<!--
     <ul class="text-sm">
        <li class="px-10 py-2 text-sm cursor-pointer" v-for="cliente in clientes" :key="cliente.idtercero"
            @click="getIdTerceroCliente(cliente.idtercero )" >
            {{ cliente.codigo_tercero }} -   {{ cliente.nomtercero }} | {{ cliente.alias }}
        </li>

      </ul>

      -->
    </div>
  </div>

</template>

<script>
import TercerosClientes from "@/models/Terceros";
import select from '../htmlControls/select.vue';

export default {
  components: { select },

  name: 'FiltroClientes',
  data() {
    return {
      clientes: [   ] ,
      nuevoCliente: '',
      idTercero:0
    }
  },

methods : {
  buscarCliente(){
 
    TercerosClientes.busquedaPorNitCodNombreSucursal( this.nuevoCliente)
    .then( response =>{
      this.clientes = response.data;
    })
  },

  getIdTerceroCliente( ) {
       this.$emit('getIdTerceroCliente',this.idTercero );
  }

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

}
</script>

<style>

</style>