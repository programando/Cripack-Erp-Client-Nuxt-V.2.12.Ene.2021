<template>
  <div>
    
    <div class="pt-24 mx-2">
      <h2 class="text-xl text-azul md:text-3xl">Ventas</h2>
      <div class="mt-2">
        <TableVentas />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/comunes/header'
import TableVentas from '@/components/tableVentas'
export default {
  name: 'Ventas',
  components: {
    Header,
    TableVentas
  }
}
</script>

<style>

</style>