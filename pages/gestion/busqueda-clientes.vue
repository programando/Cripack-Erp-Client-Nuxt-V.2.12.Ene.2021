<template>
  <div>
    <div class="pt-20 flex justify-center">
      <FiltroClientes />
    </div>
    <div class="flex justify-center mt-10">
      <VueApexLine />
      <VueApexLine />
      <VueApexBar />
    </div>
    <div class="flex justify-center mt-10 space-x-4">
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
import FiltroClientes from '@/components/gestion/FiltroClientes.vue'
import VueApexLine from '@/components/gestion/VueApexLine'
import VueApexBar from '@/components/gestion/VueApexBar.vue'
import CardCliente from '@/components/gestion/CardCliente.vue'
import Incidencias from '@/components/gestion/Incidencias.vue'
export default {
  name: 'busquedaClientes',
  components: {
    FiltroClientes, VueApexLine, VueApexBar, CardCliente, Incidencias
  }
}
</script>

<style>

</style>