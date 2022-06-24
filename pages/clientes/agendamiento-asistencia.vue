<template>
  <div class="pt-20">
    <h1 class="text-center text-xl">Agendamiento asistencia en máquinas</h1>
    <div class="flex justify-center my-4 space-x-20">
      <div>
        <label for="mes">Mes</label>
        <select v-model="mes" class="w-40 z-50 px-4 py-1 text-xs text-blue-600 bg-white border border-gray-300 rounded outline-none placeholder-azul focus:bg-gray-100" name="" id="mes">
         <option :value="1">Enero</option>
         <option :value="2">Febrero</option>
         <option :value="3">Marzo</option>
         <option :value="4">Abril</option>
         <option :value="5">Mayo</option>
         <option :value="6">Junio</option>
         <option :value="7">Julio</option>
         <option :value="8">Agosto</option>
         <option :value="9">Septiembre</option>
         <option :value="10">Octubre</option>
         <option :value="11">Novimebre</option>
         <option :value="12">Diciembre</option>
        </select>
      </div>
      <div>
        <label for="anio">Año</label>
        <input v-model="anio" class="w-20 pl-2 border focus:outline-none" type="number" name="" id="anio">
      </div>
      
    </div>
    <div class="container flex mx-auto flex-wrap">
      <ProgramacionAsistenciaMaquinas
        v-for="dia in dias"
        :key="dia.dia"
        :data="dia"
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

  data() {
    return {
      mes: 1,
      dias: [],
      anio: 0
    }
  },

  mounted() {
      TercerosClientes.agendaAsistenciaMaquinasMesAnio ( 6, 2022)
        .then( response=> {
              this.dias = response.data
              
        }
     )

    const fecha = new Date()
    this.anio = fecha.getFullYear()
    this.mes = fecha.getMonth() + 1
  }
}
</script>

<style>

</style>