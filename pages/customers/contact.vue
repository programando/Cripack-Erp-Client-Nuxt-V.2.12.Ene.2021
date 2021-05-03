<template>
  <div class="font-latos">
    <Header />
    <div class="pt-24 mx-2">
      <div class="flex justify-around mt-40">
        <div class="mt-20">
          <div>
            <h2 class="text-xl text-celeste">Visítenos</h2>
            <p class="text-azulClaro">Carrera 6# 21 - 44 Barrio San Nicolás</p>
            <p class="text-azulClaro">Cali - Colombia</p>
          </div>
          <div>
            <h2 class="text-xl text-celeste">Llámenos</h2>
            <p class="text-azulClaro">Correo: info@cripack.com</p>
            <p class="text-azulClaro">Telefono: +(57) 2 387 3164</p>
            <p class="text-azulClaro">Celular: +(57) 315 270 1964</p>
          </div>
        </div>
        <div class="pr-20">
          <h2 class="text-5xl text-azul">¡Contáctenos!</h2>
          <p class="w-4/6 mt-2 text-azulClaro">Digilencie el siguiente formulario, uno de nuestros acesores se pondrá en contacto con usted</p>
          <div>
            <InputBasic 
              type="text"
              text="Asunto"
              width="w-3/6"
              borderColor="extra"
            />
            <InputBasic 
              type="text"
              text="Encargado"
              width="w-3/6"
              borderColor="extra"
            />
            <InputBasic 
              type="text"
              text="Correo electrónico"
              width="w-3/6"
              borderColor="extra"
            />
            <InputBasic 
              type="text"
              text="Mensaje"
              width="w-3/6"
              borderColor="extra"
            />
          </div>
          <div class="mt-2">
            <button class="px-4 py-2 border-2 rounded-full border-azul text-azul">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/comunes/header";
import InputBasic from "@/components/library/InputBasic"
export default {
  name: "Ventas",
  components: {
    Header,
    InputBasic
  }
};
</script>

<style></style>
