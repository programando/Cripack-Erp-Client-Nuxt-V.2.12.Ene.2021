<template>
  <div class="flex">
        <div class="pb-8 w-40 ">
          <p class="text-gray-500 pt-1">{{ incidencia.tiempo }}</p>
        </div>
        <div class="flex flex-col items-center mr-4">
          <div>
            <div :class="setBorderColor" class="flex items-center justify-center w-8 h-8 border-8 rounded-full">
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="pb-8 pl-8">
          <p>{{ incidencia.titulo }}</p>
          <p class="text-gray-500 text-sm">{{incidencia.descripcion}}</p>
        </div>
      </div> 
</template>

<script>
export default {
  name: 'IncidenciasStatus',
  props: {
    incidencia: Object
  },
  computed: {
    setBorderColor() {
      switch (this.incidencia.status) {
        case 'sin iniciar':
          return 'border-red-600'
          break;
        case 'en proceso':
          return 'border-yellow-600'
          break;
        case 'finalizado':
          return 'border-green-600'
          break;
      
        default:
          break;
      } 
    }
  },
}
</script>

<style>

</style>