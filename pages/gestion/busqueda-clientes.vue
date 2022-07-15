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
    
  </div>
</template>

<script>
import FiltroClientes from '@/components/gestion/FiltroClientes.vue'
import VueApexLine from '@/components/gestion/VueApexLine'
import VueApexBar from '@/components/gestion/VueApexBar.vue'
export default {
  name: 'busquedaClientes',
  components: {
    FiltroClientes, VueApexLine, VueApexBar
  }
}
</script>

<style>

</style>