<template>
  <div>
    <div class="border mr-2">
      <h2 class="bg-azul text-white w-40 text-center py-1">{{ data.cfecha }}</h2>
      <!-- estado am -->
      <button v-if="data.estado_am == 'DISPONIBLE' " @click="modalAm = true" class="w-40 block h-16 border border-b border-t" :class="[setColorAm]" >
        <div class="text-xs" >{{data.texto_am}}</div>
      </button>
      <button v-else class="w-40 block h-16 border border-b border-t" :class="[setColorAm]" >
        <div class="text-xs" >{{data.texto_am}}</div>
      </button>

      <!-- estadopm -->
      <button v-if="data.estado_pm == 'DISPONIBLE' " @click="modalPm = true" class="w-40 block h-16 border border-b border-t" :class="[setColorAm]" >
        <div class="text-xs" >{{data.texto_pm}}</div>
      </button>
      <button v-else class="w-40 block h-16 border" :class="[setColorPm]">
        <div class="text-xs" >{{data.texto_pm}}</div>
      </button>
    </div>


    <!-- modal Am -->
    <div
      v-show="modalAm"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl mr-20">Model Am</h3>
          <svg
            @click="modalAm = false"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-red-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1>Modal Am</h1>
        </div>
      </div>
    </div>


    <!-- modal Am -->
    <div
      v-show="modalPm"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl mr-20">Model Pm</h3>
          <svg
            @click="modalPm = false"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-red-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h1>Modal Pm</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramacionAsistenciaMaquinas",
  props: {
    data: Object
  },

  data() {
    return {
      modalAm: false,
      modalPm: false
    }
  },

  computed: {
    setColorAm() {
      switch (this.data.estado_am) {
        case "NO DISPONIBLE":
          return "bg-calendarioAmarillo"
          break;
        case "RESERVADA":
          return "bg-calendarioVerde"
        
        
      }
    },
    setColorPm() {
      switch (this.data.estado_pm) {
        case "NO DISPONIBLE":
          return "bg-calendarioAmarillo"
          break;
        case "RESERVADA":
          return "bg-calendarioVerde"
        
        
      }
    }
  },
};
</script>

<style></style>
