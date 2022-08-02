<template>
  <div class="mx-10">
    <div class="pt-20 flex justify-center">
      <FiltroClientes @getIdTerceroCliente = "getIdTerceroCliente" />
    </div>
    <div class="flex flex-wrap justify-between mt-10 lg:mx-10 xl:mx-20">
      <VueApexLine :IdTercero="IdTercero"/>
      
      <VueApexBar  :IdTercero="IdTercero"/>
    </div>
    <div class="flex flex-wrap justify-between mt-10 mx-4 lg:mx-14 xl:mx-20">
      <CardCliente 
        title="Cotizaciones"
        subTitle="New Customer"
        :count="852"
        status="Aprobadas"
        img="/images/usuario.png"
        bg="naranja"
      />
      <CardCliente 
        title="Órdenes de trabajo"
        subTitle="Income"
        :count="5.852"
        status="En proceso"
        img="/images/nota.png"
        bg="verde"
      />
      <CardCliente 
        title="Pqr's"
        subTitle="Ticket"
        :count="42"
        status="Radicadas"
        img="/images/entrevista.png"
        bg="rojo"
      />
      <CardCliente 
        title="Cartera"
        subTitle="Orders"
        :count="5.242"
        status="Por pagar"
        img="/images/carrito.png"
        bg="azul"
      />
    </div>
    <div>
      <Incidencias />
    </div>
  </div>
</template>

<script>
import CardCliente      from '@/components/gestion/CardCliente.vue'
import FiltroClientes   from '@/components/gestion/FiltroClientes.vue'
import Incidencias      from '@/components/gestion/Incidencias.vue'
import VueApexBar       from '@/components/gestion/VueApexBar.vue'
import VueApexLine      from '@/components/gestion/VueApexLine.vue'
export default {
  name: 'busquedaClientes',
  components: {
    FiltroClientes, VueApexLine, VueApexBar, CardCliente, Incidencias
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