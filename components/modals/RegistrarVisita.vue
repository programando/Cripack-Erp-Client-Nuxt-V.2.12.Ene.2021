<template>
  <div
      class="absolute z-20 flex items-center justify-center w-full h-screen px-20 py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative px-10 py-2 bg-white border border-black">
        <div>
          <h2 class="text-2xl font-semibold text-center">
            Registro de visitas
          </h2>
          <button @click="registarVisitaClose">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>

          <div class="flex justify-center mt-2 space-x-10 text-xs">
            <div class="">
              <p class="ml-10">Código</p>
              <div class="flex space-x-2">
                <input
                  class="w-32 px-4 border rounded-sm focus:outline-none bg-gray"
                  type="text"
                  disabled
                   :value="datosCliente.codigo_tercero"
                />
              </div>
            </div>
            <div class="">
              <p>Nombre / Razón Social</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
                :value="datosCliente.nomtercero"
              />
            </div>
            <div class="">
              <p>Ciudad</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
                :value="datosCliente.nommcipio"
              />
            </div>
            <div class="">
              <p>Vendedor</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
                :value="datosCliente.nomvendedor"
              />
            </div>
          </div>
 
          <div class="flex ml-3 text-xs">
 
            <div class="">
              <div class="flex mt-4 space-x-10">
                <div class="flex space-x-4">
                  <p class="py-1 w-36">Fecha próxima visita</p>
                  <input class="px-2 -ml-4 bg-gray-100 width" type="date" v-model="formData.fecha_proxvisita" />
                </div>
                <div class="flex space-x-10">
                  <p class="py-1 width">Persona que atendió</p>
                  <input
                    class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                    type="text"
                    v-model="formData.contacto"
                  />
                </div>
              </div>
              <div class="flex mt-4 space-x-10">
                <div class="flex space-x-4">
                  <p class="w-36">Tipo de visita</p>
                  <select class="py-1 bg-gray-100 width" v-model='formData.tipo_visita'>
                    <option class="text-xs" disabled value="0">Seleccione una opción</option>
                    <option class="text-xs" value='2'>Contacto telefónico</option>
                    <option class="text-xs" value='1'>Visita en sitio</option>
                  </select>
                </div>
                <div class="flex space-x-10">
                  <p class="width">Motivo de la visita</p>
                  <select class="py-1 bg-gray-100 width" v-model="formData.idmtvovisita" >
                        <option class="text-xs" disabled value="0">Seleccione una opción</option>
                        <option class="text-xs"
                                v-for="motivo in motivosVisita" :value="motivo.idmtvovisita" :key="motivo.idmtvovisita">
                                {{motivo.nommtvovisita}}
                        </option>
                  </select>

                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-4 text-xs mx-9">
            <div class="mt-4">
              <h3>Resultado de esta visita</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
                v-model="formData.resultados"
              ></textarea>
            </div>
            <div class="mt-4 text-xs">
              <h3>Visita anterior ( resultado )</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
                disabled
                :value="this.datosVisita[0].resultados"
              ></textarea>
            </div>
          </div>
          <div class="flex justify-between space-x-20 text-xs mx-9">
            <div class="mt-4">
              <h3>Siguiente paso, en esta visita</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
                v-model="formData.siguiente_paso"
              ></textarea>
            </div>
            <div class="mt-4 text-xs">
              <h3>Visita anterior ( siguiente paso )</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
                disabled
                :value="this.datosVisita[0].siguiente_paso"
                
              ></textarea>
            </div>
          </div>

          <div class="flex justify-end mx-10 mt-8 mb-4 text-sm">
           
           <button @click="registarVisitaClose()" class="px-4 py-1 mr-4 border rounded hover:bg-rojo hover:text-white ">
              Cerrar
            </button>         
 
            <button class="flex items-center px-4 py-2 space-x-2 border rounded hover:bg-verdeOscuro hover:text-white"
                @click="grabarNuevaVisita()">
              <img class="w-6" src="/images/save.svg" alt="" />
              <p>Grabar registro de visita</p>
            </button>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    import MotivosVisitas from "@/models/MotivosVisitas";
    import Messages           from "@/mixins/sweetalert2";
    export default {
      name: 'RegistarVisita',
         props: {
          datosCliente: { type: Object, default: () => ({}),},
           datosVisita: {
              type: Array,
                 default: () => [
                    {'siguiente_paso' : '', 'resultados' :'' }
                ],
               },
      },
          mixins: [Messages],
        data:()=> ({
            formData: {
                contacto         : '',
                fecha_proxvisita : '',
                idmtvovisita     : 0,
                idtercero        : 0,
                idtercero_usuario: 0,
                resultados       : '',
                siguiente_paso   : '',
                tipo_visita      : 0,
            },
            motivosVisita:[],
            ultimaVisitaResultado:'',
            ultimaVisitaSiguientePaso:''
        }),
        mounted() {
            MotivosVisitas.getListadoActivos()
            .then ( response=>{
              this.motivosVisita = response.data;
            })
        },

      methods: {
        grabarNuevaVisita() {
           let datosOk = this.validarDatosVisita ();
           if ( datosOk !='Ok' ) { return ; }
           this.formData.idtercero = this.datosCliente.idtercero;
           this.formData.idtercero_usuario  =  this.$cookies.get("User").idtecero_vendedor;
           MotivosVisitas.grbarNuevoRegistro ( this.formData)
           .then ( () => {
              this.Message("Registro grabado" , 'Registro grabado con éxito!', 'success', 'Cerrar' );
              this.$router.push("/clientes/registro-visitas");
              this.$emit('visitaGrabada')
              console.log(this.formData)
           })
           
        },

        validarDatosVisita() {
            if (this.formData.fecha_proxvisita == ''){ 
                this.Message("Error en los datos" , 'Registre fecha de la próxima visita', 'error', 'Cerrar' );
                return 'error';
             };
            if (this.formData.contacto == ''){ 
                this.Message("Error en los datos" , 'No ha indicado el nombde de la persona que atendió la visita o llamada', 'error', 'Cerrar' );
                return 'error';
             };
            if ( this.formData.tipo_visita == 0 ){ 
                this.Message("Error en los datos" , 'Registre el tipo de visita', 'error', 'Cerrar' );
                return 'error';
              }  
            if (this.formData.idmtvovisita == 0 ){ 
                this.Message("Error en los datos" , 'Registre el motivo de la visita', 'error', 'Cerrar' );
                return 'error';
             };
               if (this.formData.resultados == ''){ 
                this.Message("Error en los datos" , 'Registre el resultado de esta visita', 'error', 'Cerrar' );
                return 'error';
             };
               if (this.formData.siguiente_paso == ''){ 
                this.Message("Error en los datos" , 'Especifique cuál es el siguiente paso', 'error', 'Cerrar' );
                return 'error';
             };                       
            return 'Ok';
        },

        registarVisitaClose() {
          this.$emit('closeRegistrarVisita')
        },
        
      },
    }
</script>

<style>

</style>