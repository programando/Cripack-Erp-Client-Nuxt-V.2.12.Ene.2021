<template>
  <div class="py-24 mx-2 font-latos">
    <div class="flex justify-between my-2">
      <h3 class="mt-4 text-2xl">
        Historial Órdenes de trabajo
      </h3>
      <div class="mt-4">
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
              <th class="w-1/12 py-2 text-left ">Estado</th>
              <th class="w-1/12 py-2 text-left ">#OT</th>
              <th class="w-1/12 py-2 text-left ">Solicitud</th>
              <th class="w-1/12 py-2 text-left ">Terminada</th>
              <th class="w-2/12 py-2 text-left ">Referencia</th>
              <th class="w-2/12 py-2 text-left ">Estilo</th>
              <th class="w-1/12 py-2 text-left ">Cantidad</th>
              <th class="w-1/12 py-2 text-left ">Cabidad</th>
              
              <th class="w-1/12 py-2 text-left ">#Factura</th>
              <th class="w-1/12 py-2 text-left ">Vr Venta</th>
              <th class="w-1/12 py-2 text-left ">#Guía</th>
              <th class="w-1/12 py-2 text-left ">Fecha Entrega</th>
              
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
              <td class="w-1/12 py-2 text-left ">
                 estado
              </td>

              <td class="w-1/12 py-2 text-left ">
                {{ venta.numero_ot }}
              </td>
              <td class="w-1/12 py-2 text-left ">
                {{ venta.fecha_solicitud | FechaLarga }}
              </td>
              <td class="w-1/12 py-2 text-left ">
                {{ venta.fecha_terminada | FechaLarga}}
              </td>
              <td class="w-2/12 py-2 text-left ">
                {{ venta.referencia }}
              </td>
              <td class="w-2/12 py-2 text-left ">
                {{ venta.nomestilotrabajo }}
              </td>
              <td class="w-1/12 py-2 text-left ">
                {{ venta.cantidad }}
              </td>
              <td class="w-1/12 py-2 text-left ">
                {{ venta.cabida }}
              </td>

              <td class="w-1/12 py-2 text-left ">
                {{ venta.numero_factura }}
              </td>
              <td class="w-1/12 py-2 text-left ">
                {{ venta.vrVenta }}
              </td>
               <td class="w-1/12 py-2 text-left ">
                {{ venta.nro_guia }}
              </td>
              <td class="w-1/12 py-2 text-left ">
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
      time:'',
      time2: '',
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
