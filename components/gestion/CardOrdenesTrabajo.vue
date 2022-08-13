<template>
  <div>
    <div
      class="flex items-center p-2 text-white rounded-md mt-4 mr-4 cursor-pointer bg-gradient-to-r from-green-600 to-green-200 border border-green-600"
      @click="modal = true"
    >
      <div class="w-48">
        <h2>Órdenes de trabajo</h2>
        <div class="flex items-center mt-4 space-x-4">
          <p class="">{{ OtsPendientes}}</p>
          <p class="text-xs">En proceso</p>
        </div>
      </div>
      <div>
        <img class="h-12" src="/images/nota.png" alt="" />
      </div>
    </div>

    
  </div>
</template>

<script>

export default {
  name: "CardOrdenesTrabajo",
  components:{},
  props: {
    title        : String,
    subTitle     : String,
    count        : Number,
    status       : String,
    img          : String,
    bg           : String,
    OtsPendientes: Number,
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