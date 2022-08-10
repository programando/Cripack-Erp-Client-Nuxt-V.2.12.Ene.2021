<template>
  <div class="">
    <div class="pt-20 flex justify-center">
      <FiltroClientes @getIdTerceroCliente = "getIdTerceroCliente" />
    </div>
    <div class="flex flex-wrap justify-between mt-10 lg:mx-10 xl:mx-20">
      <VueApexLine :IdTercero="IdTercero"/>
      
      <VueApexBar  :IdTercero="IdTercero"/>
    </div>
    <div class="flex flex-wrap mt-10 justify-around">
      <CardVisitas />
      <CardCotizaciones />
      <CardOrdenesTrabajo />
      <CardPqr />
      <CardCartera />
    </div>
    <div>
      <Incidencias />
    </div>
  </div>
</template>

<script>
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
    FiltroClientes, VueApexLine, VueApexBar, CardVisitas,CardCotizaciones,CardOrdenesTrabajo,CardPqr, CardCartera ,Incidencias
  },
      data: () => ({
            IdTercero:0
            
      }),

  methods: {
      getIdTerceroCliente( IdTercero) {
          this.IdTercero = IdTercero;
      }

  },


}
</script>

<style>

</style>