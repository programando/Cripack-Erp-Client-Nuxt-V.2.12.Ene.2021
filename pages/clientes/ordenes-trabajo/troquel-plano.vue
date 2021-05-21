<template>
  <div class="py-24">
    <div>
      <h2 class="flex justify-center text-3xl font-semibold">Troquel plano</h2>
      <div class="mx-40 mt-10">
        <div class="mx-20 ">
          <div>
            <InputBasic width="w-full" colorLabel="black" label="Referencia"></InputBasic>
          </div>
          <div class="mt-2">
            <InputBasic width="w-full" colorLabel="black" label="Archivos"></InputBasic>
          </div>
          <div class="mt-4">
            <Combo></Combo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBasic from "@/components/htmlControls/inputBasic";
import Combo from "@/components/htmlControls/combo"
export default {
  components: {
    InputBasic,
    Combo
  },
  
};
</script>

<style></style>
