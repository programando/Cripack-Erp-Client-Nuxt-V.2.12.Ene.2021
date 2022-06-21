<template>
  <div class="pt-20">
    <h1 class="text-center text-xl">Calendario</h1>
    <div class="flex justify-center">
      <CalendarioCustom
        fecha="Dom 29 may"
        laborAm="revisar facturas"
        laborPm="modificar usuario"
        
       />
    </div>
    
  </div>
  
</template>

<script>
import CalendarioCustom from "@/components/terceros/CalendarioCustom.vue"
export default {
  components: {
    CalendarioCustom
  }
}
</script>

<style>

</style>