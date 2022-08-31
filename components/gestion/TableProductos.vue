<template>
    <div v-if="productos.length>0">
      <h2 class="font-semibold text-sm">Productos vendidos</h2>
      <div class="ancho alto-maximo mt-10">
        <table class="border-t">
          <thead class="border table-sticky">
            <tr class="w-full bg-white text-azul ">
              <th class="w-10 text-xs border table-sticky py-1"></th>
              <th class="w-16 text-xs border table-sticky py-1">Alias</th>
              <th class="w-48 text-xs border table-sticky py-1">
                Producto
              </th>
            </tr>
          </thead>
          <tbody class="alto-table-2">
            <tr
              class=""
              v-for="(producto) in productos"
              :key="producto.id_grupo_estlo"
            >
              <td class="w-10 px-2 py-2 text-xs border text-azul cursor-pointer">
                <input v-model="producto.checked" class="cursor-pointer"
                    type="checkbox"
                    :checked="producto.checked"
                    @input="checked = $event.target.checked"
                    />
              </td>
              <td class="w-16 px-4 py-2 text-upperxs text-left border">
                {{ producto.alias_grup_estlo }}
              </td>
              <td class="w-48 px-4 py-2 text-upperxs text-left border">
                {{ producto.nom_grup_estlo }}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <div class="mt-2 flex justify-between">
      <div>
        <input v-model="todos" class="ml-2 cursor-pointer" type="checkbox" name="" id="todos" @click="changeAllChecks()"/>
        <label class="text-sm" for="todos">Todos</label>
      </div>
      <button
        class="px-3 py-1 text-white bg-green-600 bg-opacity-75 rounded-lg focus:outline-none text-xs"
        @click="productosSeleccionados()"
      >
        Aplicar filtros
      </button>
    </div>
  </div>
</template>

<script>

import Terceros from "@/models/Terceros";
export default {
  name: "TableProductos",
  props: [ "Identificacion"],
  data() {
    return {
      productos: [],
      todos: true
    };
  },

  watch :{
      Identificacion() {
        Terceros.productosVendidosUltimos3Anios ( this.Identificacion)
        .then( response => {
            this.productos = response.data;
        })

      }

  },

  methods: {
      changeAllChecks() {
        this.todos = !this.todos;
        this.productos.map(el => {
              return el.checked = this.todos
        })
      },
      productosSeleccionados( ) {
        let gruposProductosSeleccionados = []

        this.productos.map( (el) => {
          if ( el.checked   ) {
            gruposProductosSeleccionados.push( el.id_grup_estlo)
          }
        })
        $nuxt.$emit('ventasPorGruposDeProductoValores',gruposProductosSeleccionados)
      }

  },



};
</script>

<style scoped>
.acho {
  min-width: 400px;
}

.alto-maximo {
  max-height: 300px;
  overflow-y: scroll;
}

.table-sticky {
  position: sticky;
  top: 0;
  background: white;
}
</style>
