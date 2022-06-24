<template>
  <div class="pt-20">
    <h1 class="text-center text-xl">Agendamiento asistencia en máquinas</h1>
    <div class="flex justify-center">
      <ProgramacionAsistenciaMaquinas
        fecha="Dom 29 may"
        laborAm="revisar facturas"
        laborPm="modificar usuario"
        
       />
    </div>
    
  </div>
  
</template>

<script>
import ProgramacionAsistenciaMaquinas from "@/components/terceros/ProgramacionAsistenciaMaquinas.vue"
import TercerosClientes from "@/models/Terceros"

export default {
  name:"ProgramacionAsistenciaMaquinasPadre",
  components: {
    ProgramacionAsistenciaMaquinas
  },

  mounted() {
      TercerosClientes.agendaAsistenciaMaquinasMesAnio ( 6, 2022)
        .then( response=> {
              console.log(response.data)
        }
     )
  }
}
</script>

<style>

</style>