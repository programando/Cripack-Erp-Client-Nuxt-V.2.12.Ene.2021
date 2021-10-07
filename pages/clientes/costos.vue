<template>
  <div class="pt-24 mx-2 font-Montserrat">
    <div class="flex items-center justify-center mx-auto mt-10">
      <h2 class="text-2xl font-semibold">
        Evaluación costos de arreglos y encauches v/s
      </h2>
    </div>
    <section class="container p-6 mx-auto font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full ">
          <DatosBasicos />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DatosBasicos from '@/components/costos/datosBasicos.vue'
export default {
  name: "costos",
  components: {
    DatosBasicos
  }
};
</script>

<style></style>
