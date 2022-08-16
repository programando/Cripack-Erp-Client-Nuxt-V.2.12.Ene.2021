<template>
  <div>
    <div
      class="flex items-center p-2 text-white rounded-md mt-4 mr-4 cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-200 border border-yellow-500"
      @click="modal = true"
    >
      <div class="w-48">
        <h2>{{CantCotizaciones}} &nbsp; Cotizaciones</h2>
        <div class="flex items-center mt-4 space-x-4">
          <p class="text-xs">Últimos 6 meses</p>
        </div>
      </div>
      <div>
        <img class="h-12" src="/images/usuario.png" alt="" />
      </div>
    </div>

    <!-- modal -->
    <div v-if="modal"  >
      <Cotizaciones @closeCotizaciones = 'closeCotizaciones' :Identificacion="Identificacion"/>
    </div>
  </div>
</template>

<script>
import Cotizaciones      from '@/components/modals/Cotizaciones.vue'
export default {
  name: "CardCotizaciones",
  components:{
    Cotizaciones
  },
  props: ['CantCotizaciones','Identificacion'],

  data() {
    return {
      modal: false,
    }
  },

  methods: {
    closeCotizaciones() {
      this.modal = false
    },
  }

};
</script>

<style scoped>
.table {
  width: 1200px;
}
</style>
