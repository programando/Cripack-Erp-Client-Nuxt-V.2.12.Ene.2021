<template>
  <div
      class="absolute left-0 z-20 flex items-center justify-center w-full h-screen  py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative mx-4 mt-4 table bg-white p-10 ancho">
         <h2 class="text-center text-azul mb-2 text-lg font-semibold">Cotizaciones</h2>
        <button @click="cotizacionesClose">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>
       
        <table class="w-full border-t">

          <thead class="w-full border ">
            <tr class="w-full bg-white text-azul ">
              <th class="w-2/12 text-xs border table-sticky">Fecha </th>
              <th class="w-2/12 text-xs border table-sticky">Nro.Ctz</th>
              <th class="w-2/12 text-xs border table-sticky">Nro.OT</th>
              <th class="w-4/12 text-xs border table-sticky">Referencia</th>
              <th class="w-2/12 text-xs border table-sticky">Vr.Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Cotizacion in Cotizaciones" :key="Cotizacion.idregistro_ctz_dt" class="">
              <td class="w-2/12 px-2 py-2 text-xs border text-azul"> {{ Cotizacion.fecha | FechaCorta}}</td>
              <td class="w-2/12 px-4 py-2 text-xs text-left border">{{ Cotizacion.num_ctz_ref}}</td>
              <td class="w-2/12 px-4 py-2 text-xs text-left border">{{Cotizacion.numero_ot | NoShowZero}}</td>
              <td class="w-4/12 px-4 py-2 text-xs text-left border">{{Cotizacion.referencia}}</td>
              <td class="w-2/12 px-4 py-2 text-xs text-left border text-right ">{{Cotizacion.vr_precio_vta_dado | NumeroEntero}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>

import TercerosClientes from "@/models/Terceros";
export default {
  name: 'Cotizaciones',
   props: ['Identificacion'],
  data: () => ({
      Cotizaciones: []
  }),

  methods: {
    cotizacionesClose() {
      this.$emit('closeCotizaciones')
    }
  },

    mounted() {
       TercerosClientes.cotizacionesUltimos6Meses ( this.Identificacion)
        .then ( response => {
          this.Cotizaciones = response.data;    
        });
    },

}
</script>


<style scoped>
    .centrar {
      position: absolute;
      width: 1200px;
      left: 50%;
      margin-left: -600px;
      top: 10;
    }

    .ancho {
      min-width: 900px;
    }
</style>
