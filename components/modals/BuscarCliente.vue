<template>
  <div class="absolute inset-0 z-10 items-center justify-center ">
    <div class="px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div
        class="absolute items-center justify-center inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        aria-hidden="true"
      >
        <div
        class="relative inline-block w-11/12 md:w-9/12 lg:w-6/12 transition-all transform bg-white rounded-lg shadow-xl top-32"
      >
        <div class="px-4 pt-5 pb-4 bg-white">
          <div class="">
            <div
              class="sticky flex items-center justify-center mt-3 space-x-4 sm:mt-0"
            >
              <label class="text-xs">Buscar Cliente :</label>
              <input
                class="px-4 py-1 text-xs border rounded w-80 focus:outline-none"
                type="text"
                placeholder="buscar por código o nombre  "
                @change="buscarCliente()"
                @input="buscarCliente()"
                v-model='textoBusqueda'
              />
            </div>
            <div class="mx-10 overflow-auto alto">
              <table class="w-full mt-2 border">
                <thead class="border">
                  <tr>
                    <th class="px-2 text-xs text-left border-l w-28">Código</th>
                    <th class="px-2 text-xs text-left border-l w-28">Nombre</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="border">

                  <tr v-for="cliente in clientes" :key="cliente.idtercero">
                    <td class="px-2 text-sm text-left border-l"> {{ cliente.codigo_tercero }}</td>
                    <td class="w-10/12 px-2 text-xs text-left border-l"> {{ cliente.nomtercero }} </td>
                    <td class="flex items-end justify-end w-10 mr-1">

                      <img
                        class="w-6 h-6 cursor-pointer"
                        src="/images/flecha-derecha.svg"
                        alt=""
                        @click="getIdTerceroCliente ( cliente.codigo_tercero, cliente.idtercero )"
                      />
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="px-4 py-3 mx-10 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
        >
          <button
            type="button"
            @click="getIdTerceroCliente( -1 )"
            class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cerrar
          </button>
        </div>
      </div>
      
      </div>

      
    </div>
  </div>
</template>

<script>
import TercerosClientes from "@/models/Terceros";
export default {
  name: 'BuscarCliente',
  data: () => ({
      primerosVeinteClientes : [],
      clientes: [],
      textoBusqueda :'',
  }),

  mounted() {
     
    TercerosClientes.primerosVeinteClientesPorVendedor( this.$cookies.get("User").idtecero_vendedor)
    .then ( response => {
        this.clientes = response.data;
        this.primerosVeinteClientes = response.data;
    })
  },

  methods: {


    getIdTerceroCliente ( CodTercero, IdTercero ) {
        this.$emit("getIdTerceroCliente", CodTercero ,IdTercero );
    },

    buscarCliente () {
        TercerosClientes.busquedaPorVendedor ( this.textoBusqueda, this.$cookies.get("User").idtecero_vendedor )
        .then ( response => {
            this.clientes = response.data;
            if ( this.clientes.length == 0 ) {
              this.clientes = this.primerosVeinteClientes;
            }
        })
    }
  }
};
</script>

<style>
.alto {
  max-height: 400px;
  
}


</style>
