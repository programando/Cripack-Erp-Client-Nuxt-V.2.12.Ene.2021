<template>
  <div>
    <div class="flex justify-center w-full">
      <font-awesome-icon class="z-10 h-8 mt-2 -mr-8" :icon="['fas', 'user']" />
      <Password class="w-full " v-model="password"></Password>
    </div>
    <div class="flex justify-center w-full">
      <font-awesome-icon class="z-10 h-8 mt-2 -mr-8" :icon="['fas', 'user']" />
      <Password class="w-full " v-model="passwordb"></Password>
    </div>
    <div class="flex justify-center mt-4 font-semibold">
      <BtnCallToAction
        
        size="small"
        ref="ButtonLoading"
        variant="success"
        variant-type="normal"
      >
        Actualizar contraseña
      </BtnCallToAction>
    </div>
  </div>
</template>

<script>
import Password from "vue-password-strength-meter";
import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
export default {
  name: "password-meter",
  components: {
    Password,
    BtnCallToAction
  },
  data() {
    return {
      password: "",
      passwordb: ""
    };
  }
};
</script>

<style>
input.Password__field {
  padding-left: 35px;
}

.Password.w-full {
  max-width: 100%;
}
</style>
