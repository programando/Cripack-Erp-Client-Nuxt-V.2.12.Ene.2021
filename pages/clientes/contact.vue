<template>
  <div class="flex items-center justify-center h-screen -mt-24 font-latos">
    <div class="flex">
      <div class="mt-20 ml-40">
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
      <div class="pl-40">
        <h2 class="text-5xl text-azul">¡Contáctenos!</h2>
        <p class="w-4/6 mt-2 text-azulClaro">
          Digilencie el siguiente formulario, uno de nuestros acesores se pondrá
          en contacto con usted
        </p>
        <div>
          <div class="w-4/6 mt-2">
            <InputBasic
              type="text"
              text="Asunto"
              width="w-3/6"
              borderColor="extra"
            />
          </div>
          <div class="w-4/6 mt-2">
            <InputBasic
              type="text"
              text="Encargado"
              width="w-3/6"
              borderColor="extra"
            />
          </div>
          <div class="w-4/6 mt-2">
            <InputBasic
              type="text"
              text="Correo electrónico"
              width="w-3/6"
              borderColor="extra"
            />
          </div>
          <div class="mt-2">
            <textarea
              class="w-4/6 px-4 py-2 text-gray-700 placeholder-gray-700 bg-white border-2 border-gray-400 rounded outline-none focus:outline-none focus:bg-gray-100"
              placeholder="Mensaje"
              name="observaciones"
              cols="47"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="mt-2">
          <button
            class="px-4 py-2 text-lg text-white bg-green-600 border-2 border-green-600 rounded-lg hover:bg-green-700 hover:border-green-700"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/comunes/header";
import InputBasic from "@/components/htmlControls/inputBasic";
export default {
  name: "Ventas",
  components: {
    Header,
    InputBasic
  }
};
</script>

<style></style>
