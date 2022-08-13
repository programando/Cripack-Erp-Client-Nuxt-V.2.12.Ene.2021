<template>
  <div>
    <div
      class="flex items-center p-2 text-white rounded-md mt-4 mr-4 cursor-pointer bg-gradient-to-r from-red-500 to-red-200 border border-red-500"
      @click="modal = true"
    >
      <div class="w-48">
        <h2>Pqr's</h2>

        <div class="flex items-center mt-4 space-x-4">
          <p class="">42</p>
          <p class="text-xs">Radicadas</p>
        </div>
      </div>
      <div>
        <img class="h-12" src="/images/entrevista.png" alt="" />
      </div>
    </div>

    <!-- modal -->
    <div v-if="modal"  >
      <Pqrs @closePqrs = 'closePqrs' :datosVisita="registroVisita"/>
    </div>

  </div>
</template>

<script>
import Pqrs      from '@/components/modals/Pqrs.vue'
export default {
  name: "CardPqr",
  components:{Pqrs},
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

    }
  },

  methods: {
    closePqrs() {
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
