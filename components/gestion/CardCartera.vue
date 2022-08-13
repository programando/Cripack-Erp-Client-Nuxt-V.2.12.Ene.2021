<template>
  <div>
    <div
      class="flex items-center p-2 text-white rounded-md mt-4 mr-4 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-200 border border-blue-500"
      @click="modal = carteraCliente = true"
    >
      <div class="w-48">
        <h2>Cartera total</h2>
        <div class="flex items-center mt-4 space-x-4">
          <p class="text-xs">$ &nbsp; {{TotalCartera | NumeroEntero}}</p>
          
        </div>
      </div>
      <div>
        <img class="h-12" src="/images/carrito.png" alt="" />
      </div>
    </div>


    <!-- modal  -->
    <div v-if="carteraCliente">
      <CarteraCliente @closeCarteraCliente = 'closeCarteraCliente' :identificacion="identificacion"  />
    </div>

  </div>
</template>

<script>
import CarteraCliente     from '@/components/modals/CarteraCliente.vue'

export default {
  name: "CardCartera",
  components:{CarteraCliente},
  props: {
    bg            : String,
    count         : Number,
    identificacion: String,
    img           : String,
    status        : String,
    subTitle      : String,
    title         : String,
    TotalCartera: Number

  },

  data() {
    return {
      carteraCliente: false,
    }
  },


  methods: {
    closeCarteraCliente() {
            this.carteraCliente = false
          },
  },

  
};
</script>

<style scoped>
.table {
  width: 1200px;
}

.centrar {
  position: absolute;
  width: 1200px;
  left: 50%;
  margin-left: -600px;
  top: 50%;
}
</style>