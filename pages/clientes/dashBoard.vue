<template>
  <div class="">
    <div class="pt-20 flex justify-center">
      <FiltroClientes @getIdTerceroCliente = "getIdTerceroCliente" />
    </div>
    <div class="flex flex-wrap justify-between mt-20 lg:mx-10 xl:mx-20">
      <TableProductos />
      <VueApexLine :IdTercero="IdTercero"/>
      <VueApexBar  :IdTercero="IdTercero"/>

    </div>
    <div class="flex flex-wrap mt-6 justify-evenly xl:justify-between mx-10">
      <CardVisitas  :IdTercero="IdTercero"/>
      <CardCotizaciones   :Identificacion="identificacion" :CantCotizaciones="CantCotizaciones"/>
      <CardOrdenesTrabajo :Identificacion="identificacion" :OtsPendientes="OtsPendientes"/>
      <CardPqr            :Identificacion="identificacion" :CantPqrs="CantPqrs"/>
      <CardCartera        :identificacion="identificacion" :TotalCartera="TotalCartera"/>
    </div>

 <!--   <div>
      <Incidencias />
    </div>
-->
  </div>
</template>

<script>
import TableProductos      from '@/components/gestion/TableProductos.vue'
import CardVisitas      from '@/components/gestion/CardVisitas.vue'
import CardCotizaciones      from '@/components/gestion/CardCotizaciones.vue'
import CardOrdenesTrabajo      from '@/components/gestion/CardOrdenesTrabajo.vue'
import CardPqr      from '@/components/gestion/CardPqr.vue'
import CardCartera      from '@/components/gestion/CardCartera.vue'
import FiltroClientes   from '@/components/gestion/FiltroClientes.vue'
import Incidencias      from '@/components/gestion/Incidencias.vue'
import VueApexBar       from '@/components/gestion/VueApexBar.vue'
import VueApexLine      from '@/components/gestion/VueApexLine.vue'
export default {
  name: 'busquedaClientes',
  components: {
    FiltroClientes, VueApexLine, VueApexBar, CardVisitas,CardCotizaciones,CardOrdenesTrabajo,CardPqr, CardCartera ,Incidencias, TableProductos
  },
      data: () => ({
            CantCotizaciones: 0,
            CantPqrs        : 0,
            IdTercero       : 0,
            OtsPendientes   : 0,
            TotalCartera    : 0,
            facturasPorPagar: 0,
            identificacion  : '',
      }),

  methods: {
      getIdTerceroCliente( IdTercero, nomtercero, identificacion, OtsPendientes, TotalCartera, CantCotizaciones, CantPqrs) {
          this.IdTercero        = IdTercero;
          this.identificacion   = identificacion;
          this.TotalCartera     = parseInt(TotalCartera);
          this.OtsPendientes    = parseInt(OtsPendientes);
          this.CantCotizaciones = parseInt(CantCotizaciones);
          this.CantPqrs         = parseInt(CantPqrs);

      }

  },


}
</script>

<style>

</style>
