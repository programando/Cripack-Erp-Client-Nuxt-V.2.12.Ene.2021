<template>
  <div class="py-24 mx-2 font-latos">
    <div class="flex justify-between my-2">
      <h3 class="mt-1 text-3xl">
        Historial Órdenes de trabajo
      </h3>
      <div class="mt-2">
        <div class="flex space-x-2">
          <!-- calendario1 -->
          <client-only>
            <date-picker v-model="time" valueType="format"></date-picker>
          </client-only>
          <!-- calendario2 -->
          <client-only>
            <date-picker v-model="time2" valueType="format"></date-picker>
          </client-only>
          <button class="px-4 py-1 text-white rounded-md bg-celeste hover:bg-blue-500">Consultar ventas</button>
        </div>
      </div>
      <div class="flex items-center">
        <div class="z-10 -mr-8">
          <font-awesome-icon class="" :icon="['fas', 'search']" />
        </div>

        <input
          class="px-10 py-2 border-2 focus:outline-none"
          type="text"
          v-model="busqueda"
          placeholder="Buscar por Nombre"
        />
      </div>
    </div>
    <div class="w-full text-left">
      <div class="bg-white rounded shadow-md ">
        <table class="w-full">
          <thead class="flex w-full margen">
            <tr class="flex w-full text-sm text-gray-600 bg-gray-200">
              <th class="w-1/12 px-2 py-2 text-center">Estado</th>
              <th class="w-1/12 px-2 py-2 text-center">#OT</th>
              <th class="w-1/12 px-2 py-2 text-center">Solicitud</th>
              <th class="w-1/12 px-2 py-2 text-center">Terminada</th>
              <th class="w-3/12 px-2 py-2 text-center">Referencia</th>
              <th class="w-2/12 px-2 py-2 text-center">Estilo</th>
              <th class="px-2 py-2 text-center w-14">Can</th>
              <th class="px-2 py-2 text-center w-14">Cab</th>
              <th class="w-20 px-2 py-2 text-center">#Factura</th>
              <th class="w-1/12 px-2 py-2 text-center">Vr Venta</th>
              <th class="w-20 px-2 py-2 text-center">#Guía</th>
              <th class="w-1/12 py-2 text-center">Fecha Entrega</th>
            </tr>
          </thead>
          <tbody
            class="flex flex-col w-full overflow-y-scroll text-xs text-gray-600 bg-white"
            style="height: 64vh;"
          >
            <tr
              v-for="venta in Ventas"
              :key="venta.idregistro_ot"
              class="flex w-full text-xs bg-white border-b border-gray-200 hover:bg-gray-100 tr"
            >
 
              <td class="flex items-center justify-start w-1/12 px-2 py-2 space-x-2 text-left">
                 <div  v-if="venta.fecha_entrega" class="flex items-center justify-center h-6 px-2 py-2 text-xs text-white bg-green-700 border-green-700 rounded-lg ">Terminada</div>
                 <div v-else class="flex items-center justify-center h-6 px-2 py-2 text-xs bg-yellow-300 border-yellow-300 rounded-lg">En proceso</div>

              </td>

              <td class="w-1/12 px-2 py-2 text-center ">
                {{ venta.numero_ot }}
              </td>
              <td class="w-1/12 px-2 py-2 text-right ">
                {{ venta.fecha_solicitud | FechaLarga }}
              </td>
              <td class="w-1/12 px-2 py-2 text-right ">
                {{ venta.fecha_terminada | FechaLarga}}
              </td>
              <td class="w-3/12 px-2 py-2 text-xs text-left ">
                {{ venta.referencia }}
              </td>
              <td class="w-2/12 px-2 py-2 text-left ">
                {{ venta.nomestilotrabajo }}
              </td>
              <td class="px-4 py-2 text-right w-14 ">
                {{ venta.cantidad }}
              </td>
              <td class="px-4 py-2 text-right w-14 ">
                {{ venta.cabida }}
              </td>

              <td class="w-20 px-2 py-2 text-right ">
                {{ venta.numero_factura }}
              </td>
              <td class="w-1/12 px-2 py-2 text-right ">
                {{ venta.vrVenta }}
              </td>
               <td class="w-20 px-2 py-2 text-right ">
                {{ venta.nro_guia }}
              </td>
              <td class="w-1/12 px-2 py-2 text-left">
                {{ venta.fecha_entrega | FechaLarga }}
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Terceros from "@/models/Terceros";

export default {
  data() {
    return {
      time:'2021-05-09',
      time2: '2021-05-10',
      busqueda: "",
      Ventas: [],
      idtercero: ""
    };
  },

  

  mounted() {
    this.idtercero = this.$cookies.get("User").idtercero;
    Terceros.historialVentas("/clientes/ots?idtercero=" + this.idtercero).then(
      response => {
        this.Ventas = response.data.data;
      }
    );
  },

  computed: {
    busquedaFiltrada() {
      return this.productos.filter(producto => {
        return producto.estilo
          .toLowerCase()
          .includes(this.busqueda.toLowerCase());
      });
    }
  }
};
</script>

<style>
.margen {
  padding-right: 16px;
}
</style>
