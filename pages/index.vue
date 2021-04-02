<template>
  <div class="font-rale">
    <div
      class="h-screen pt-24 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/background.jpg')"
    >
      <div class="flex justify-center mt-10">
        <div class="px-8 py-6 mt-6 md:py-8 md:px-12 lg:mt-0 opacity-90 fondo">
          <!-- label, titulo y descripcion -->
          <div class="flex justify-center text-4xl font-bold text-white">
            <span
              ><img class="h-24" src="/images/logoCripack.png" alt=""
            /></span>
          </div>

          <LabelTitle
            title="Bienvenid@"
            description="Ingrese para hacer seguimiento a sus servicios y procesos"
            align="center"
            color="white"
          >
          </LabelTitle>

          <div class="mt-4">
            <!-- inputText -->
            <div class="grid items-center lg:grid-cols-3">
              <label class="pr-10 text-white">Email:</label>
              <div class="w-full col-span-2">
                <InputBasic
                  type="text"
                  text="jhonjamesmg@hotmail.com"
                  width="w-full"
                />
              </div>
            </div>

            <!-- inputPassword -->
            <div class="grid items-center lg:grid-cols-3">
              <label class="pr-10 text-white">Contraseña:</label>
              <div class="w-full col-span-2">
                <InputBasic type="password" text="contraseña" width="w-full" />
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-8 mb-2 text-lg font-semibold">
            <ButtonLoad
              class="hover:bg-white hover:text-black"
              text="Ingresar"
              to="/dashboard/"
              color="white"
            />
          </div>
          <div class="flex justify-center text-sm text-white">
            <ButtonRegister/>
          </div>
          <div class="flex justify-center mt-2 text-sm text-white">
            <button>
              He olvidado mi contraseña,<span class="font-semibold"
                >¡deseo cambiarla!</span
              >
            </button>
          </div>
          <div>
            <div class="flex justify-center mt-2 text-sm text-white">
              <button>Sistema de transcripcion Braille</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelTitle from "@/components/library/LabelTitle";
import InputBasic from "@/components/library/InputBasic";
import ButtonBasic from "@/components/library/ButtonBasic";
import ButtonLoad from "@/components/library/ButtonLoad";
import ButtonRegister from "@/components/library/buttonRegister";

export default {
  components: {
    LabelTitle,
    InputBasic,
    ButtonBasic,
    ButtonLoad,
    ButtonRegister
  },
  data() {
    return {
      modal: true
    }
  },
};
</script>
<style>
.fondo {
  background: #16182f;
}
</style>
