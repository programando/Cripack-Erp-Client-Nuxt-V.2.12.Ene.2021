<template>
  <div>
    <Header />
    <div class="mx-2 mt-10">
      <h2 class="text-xl text-azul md:text-3xl">Historial de OT's</h2>
      <TableOts></TableOts>
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