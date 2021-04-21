<template>
  <div>
    <Header />
    <div class="pt-24 mx-2">
      <h2 class="text-xl text-azul md:text-3xl">Historial de OT's</h2>
      <div class="mt-2">
        <TableOts></TableOts>
      </div>
    </div>
  </div>
  
</template>

<script>
import Header from '@/components/comunes/header'
import TableOts from '@/components/tableOts'
export default {
  components: {
    Header,
    TableOts
  }
}
</script>

<style>

</style>




