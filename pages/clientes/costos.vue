<template>
  <div class="pt-24 mx-2t">
    <div class="flex items-center justify-center mx-auto mt-10">
      <h2 class="text-lg font-semibold text-azul">
        Evaluación costos alistamiento y encauche v/s proveedor
      </h2>
    </div>
    <section class="container p-6 mx-auto font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg ">
        <div class=" xl:px-40">
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
