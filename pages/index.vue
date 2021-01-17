<template>
  <div>
    <div
      class="h-screen pt-24 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/background.jpg')"
    >
      <div class="mt-10">
        <div class="flex justify-center text-4xl font-bold text-white">
          <h2>Cripack S.A.S</h2>
        </div>
        <div
          class="gap-10 mx-10 mt-10 md:mx-20 lg:mx-24 xl:mx-32 lg:grid lg:grid-cols-2"
        >
          <div class="text-white">
            <p class="lg:text-lg">
              Se gana y se pierde, se sube y se baja, se nace y se muere. Y si
              la historia es tan simple, ¿por qué te preocupas tanto?
            </p>
            <h3 class="flex justify-end mt-1 mr-4 font-semibold lg:text-lg">
              -Fancundo Cabral
            </h3>
          </div>
          <div
            class="px-8 py-6 mt-6 bg-white border rounded-lg md:py-8 md:px-12 lg:mt-0"
          >
            <!-- label, titulo y descripcion -->

            <LabelTitle
              title="Bienvenid@"
              description="Registre sus credenciales para ingreso al sistema"
              align="center"
              color="extra"
            >
            </LabelTitle>

            <div class="mt-4">
              <!-- inputText -->
              <InputBasic
                type="text"
                text="jhonjamesmg@hotmail.com"
                width="w-full"
              ></InputBasic>

              <!-- inputPassword -->
              <InputBasic
                type="password"
                text="contraseña"
                width="w-full"
              ></InputBasic>
            </div>

            <div class="flex justify-between mt-4">
              <ButtonBasic
                text="Olvidé mi contraeña"
                to="/modulos/Contraseña"
              ></ButtonBasic>

              <ButtonLoad
                text="Ingresar al sistema"
                to="/dashboard/"
                variant="success"
              ></ButtonLoad>
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

export default {
  

  
};
</script>