<template>
  <div>
    <div
      class="flex items-center p-2 text-white rounded-md mt-4 mr-4 cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-200 border border-yellow-500"
      @click="modal = true"
    >
      <div class="w-48">
        <h2>Cotizaciones</h2>
        <div class="flex items-center mt-4 space-x-4">
          <p class="">852</p>
          <p class="text-xs">aprobadas</p>
        </div>
      </div>
      <div>
        <img class="h-12" src="/images/usuario.png" alt="" />
      </div>
    </div>

    
  </div>
</template>

<script>

export default {
  name: "CardCotizaciones",
  components:{},
  props: {
    title: String,
    subTitle: String,
    count: Number,
    status: String,
    img: String,
    bg: String
  },

  data() {
    return {
      modal: false,
      detalleVisita: false,
      
    }
  },

  
};
</script>

<style scoped>
.table {
  width: 1200px;
}
</style>
