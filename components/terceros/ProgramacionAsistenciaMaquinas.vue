<template>
  <div>
    <div class="border">
      <h2 class="bg-azul text-white w-44 text-center py-1">{{ fecha }}</h2>
      <button @click="modalAm = true" class="w-44 block h-16 border border-b border-t">
        <div>{{laborAm}}</div>
      </button>
      <button @click="modalPm = true" class="w-44 block h-16 border">
        <div>{{laborPm}}</div>
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
    fecha    : String,
    laborAm  : String,
    laborPm  : String,
    detalleAm: String,
    detallePm: String,
    estadoAm : String,
    estadoPm : String
  },

  data() {
    return {
      modalAm: false,
      modalPm: false
    }
  },
};
</script>

<style></style>
