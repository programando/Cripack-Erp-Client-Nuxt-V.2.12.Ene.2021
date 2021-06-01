<template>
  <div class="flex items-center justify-center h-screen pt-24 -mt-24 font-Raleway">
    <div class="flex">

 
      <div class="mt-16 ml-40">
        <div>
          <h2 class="text-3xl text-azul">Visítenos</h2>
          <p class="mt-1 ml-2 text-azulClaro">Carrera 6 # 21 - 44 Barrio San Nicolás</p>
          <p class="mt-1 ml-2 text-azulClaro">Cali - Colombia</p>
        </div>
        <div>
        
          <h2 class="mt-10 text-3xl text-azul">Llámenos</h2>
          <p class="mt-1 ml-2 text-azulClaro">Telefono: +(57) 2 387 3164</p>
          <p class="mt-1 ml-2 text-azulClaro">Celular: +(57) 315 270 1964</p>
          <p class="mt-1 ml-2 text-azulClaro">Correo: info@cripack.com</p>
        </div>
      </div>
      
      <div class="pl-40">
        <h2 class="text-4xl text-azul">¡Contáctenos!</h2>
        <p class="w-4/6 mt-2 text-azulClaro">
          Digilencie el siguiente formulario, uno de nuestros acesores se pondrá en contacto con usted.
        </p>
        <div>
          
          <div class="w-4/6 mt-2">
            <InputBasic
              type="text"
              text="Persona de contacto"
              width="w-3/6"
              borderColor="extra"
              v-model="formData.contacto"
            />
          </div>
          
          <div class="w-4/6 mt-2">
            <InputBasic
              type="text"
              text="Asunto"
              width="w-3/6"
              borderColor="extra"
              v-model="formData.asunto"
             />


          </div>
          <div class="w-4/6 mt-2">
            <InputBasic
              type="text"
              text="Correo electrónico"
              width="w-3/6"
              borderColor="extra"
              v-model="formData.email"
            />
          </div>
          <div class="mt-2">
            <textarea
              class="w-4/6 px-4 py-2 text-gray-700 placeholder-gray-700 bg-white border-2 border-gray-400 rounded outline-none focus:outline-none focus:bg-gray-100"
              placeholder="Mensaje"
              name="observaciones"
              cols="47"
              rows="3"
              v-model="formData.mensaje"
            ></textarea>
          </div>
        </div>
        <div class="mt-2">
         
          <BtnCallToAction
            @click.prevent="sendContacData"
            size="small"
            ref="ButtonLoading"
            variant="success"
            variant-type="normal"
            colorIcon="white"
            :showBtnAnimation="showBtnAnimation"
          >
            Enviar datos
          </BtnCallToAction>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
import InputBasic         from "@/components/htmlControls/inputBasic";
import User               from "@/models/User";

export default {
  name: "ContactoClientes",
  components: {  BtnCallToAction,  InputBasic  },
  data: ()=> ({
      formData : {
          asunto  : '',
          contacto: '',
          email   : '',
          mensaje : '',
      },
      errors :[],
      showBtnAnimation:false
  }),

  methods: {
        sendContacData() {
            this.showBtnAnimation = true;
            User.contactoUsuarioWeb ( this.formData )
            .then ( response =>{
              this.showBtnAnimation = false;
            })
            .catch ( error => {
                this.showBtnAnimation = false;
                this.errors = error.response.data.errors;
            })
        }
  }
};
</script>
