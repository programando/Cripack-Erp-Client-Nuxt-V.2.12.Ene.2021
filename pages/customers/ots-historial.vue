<template>
  <div class="py-24 mx-4 font-latos">
    <div class="flex justify-between my-2">
      <h3 class="mt-4">
        Mostrando registros del 1 al 10 de un total de 150 registros
      </h3>
      <div class="flex items-center">
        <img
          class="z-20 inline h-6 -mr-8"
          src="/images/search-repo.svg"
          alt=""
        />
        <input
          class="px-10 py-2 border-2 focus:outline-none"
          type="text"
          v-model="busqueda"
          placeholder="Buscar por Nombre"
        />
      </div>
    </div>

    <div class="w-full">
      <div class="bg-white rounded shadow-md ">
        <table class="w-full ">
          <thead class="w-full">
            <tr class="text-sm text-gray-600 bg-gray-200 ">
              <th class="px-2 py-2 text-left ">#OT</th>
              <th class="px-2 py-2 text-left ">Solicitud</th>
              <th class="px-2 py-2 text-left ">Terminada</th>
              <th class="px-2 py-2 text-left ">Referencia</th>
              <th class="px-2 py-2 text-left ">Estilo</th>
              <th class="px-2 py-2 text-left ">Cantidad</th>
              <th class="px-2 py-2 text-left ">Cabidad</th>
              <th class="w-20 px-2 py-2 text-left ">Estado</th>
              <th class="px-2 py-2 text-left ">#Factura</th>
              <th class="px-2 py-2 text-left ">#Remisión</th>
              <th class="px-2 py-2 text-left ">#Guia</th>
              <th class="px-2 py-2 text-left ">Fecha Entrega</th>
            </tr>
          </thead>
          <tbody class="text-gray-600">
            <tr
              v-for="(venta) in Ventas" :key="venta.idregistro_ot"
              
              class="text-xs border-b border-gray-200 hover:bg-gray-100"
            >
              <td class="px-2 py-2 text-left ">
                {{ venta.numero_ot }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.fecha_solicitud }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.fecha_terminada }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.referencia }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.nomestilotrabajo }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.cantidad }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.cabida }}
              </td>
              <td class="w-1 px-2 py-2 text-left">
                {{ venta.idtercero }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.numero_factura }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.nro_remision }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.nro_guia }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.fecha_entrega }}
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
      busqueda: "",
      Ventas: [],
      idtercero:''
    };
  },

  mounted() {
      this.idtercero = this.$cookies.get('User').idtercero
      Terceros.historialVentas ('/clientes/ots?idtercero='+this.idtercero)
      .then ( response => {
          this.Ventas = response.data.data;
      })
  },

  computed: {
    busquedaFiltrada() {
      return this.productos.filter(producto => {
        return producto.estilo
          .toLowerCase()
          .includes(this.busqueda.toLowerCase());
      });
    }
  },

};
</script>

<style></style>
