<template>
  <div class="pt-24 mx-2 font-Montserrat">
    <div class="flex justify-between my-2">


      <h3 class="mt-1 text-3xl">
        Estado Órdenes Trabajo
      </h3>
      <div class="mt-2"></div>
      <div class="flex items-center">
        <div class="z-10 -mr-8">
          <font-awesome-icon class="" :icon="['fas', 'search']" />
        </div>

        <input
          class="px-10 py-1 border-2 focus:outline-none"
          type="text"
          v-model="busqueda"
          placeholder="Buscar referencia"
        />
      </div>
    </div>
    <div class="w-full text-left">
      <div class="bg-white rounded shadow-md ">
        <table class="w-full">
          <thead class="flex w-full margen">
            <tr class="flex w-full text-sm text-gray-600 bg-gray-200">
              <th class="w-1/12 px-2 ali-center">#OT</th>
              <th class="w-3/12 px-2 ali-center">Referencia</th>
              <th class="w-2/12 px-2 ali-center">Estilo</th>
              <th class="w-1/12 px-2 ali-center">Tipo</th>
              <th class="w-3/12 px-2 ali-center"></th>
              <th class="w-2/12 px-2 ali-center">Fecha Confirmada</th>
            </tr>
          </thead>
          <tbody
            class="flex flex-col w-full overflow-y-scroll text-xs text-gray-600 bg-white"
            style="height: 64vh;"
          >
            <tr v-for="OTs in  otsEnProduccion"   :key="OTs.numero_ot"
              class="flex w-full text-xs bg-white border-b border-gray-200 hover:bg-gray-100 tr" >
              <td class="w-1/12 ali-center">        {{  OTs.numero_ot         }}  </td>
              <td class="w-3/12 ali-left">          {{  OTs.referencia        }}  </td>
              <td class="w-2/12 ali-center">        {{  OTs.nomestilotrabajo  }}  </td>
              <td class="w-1/12 ali-center">        {{  OTs.nomtipotrabajo    }}  </td>

              <td class="flex w-3/12 py-2 text-xs text-center">
                <div class="labores" :class="[ colorLabor (OTs.color1) ]">  {{  OTs.labor1  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color2) ]" > {{  OTs.labor2  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color3) ]" > {{  OTs.labor3  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color4) ]">  {{  OTs.labor4  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color5) ]">  {{  OTs.labor5  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color6) ]">  {{  OTs.labor6  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color7) ]">  {{  OTs.labor7  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color8) ]">  {{  OTs.labor8  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color9) ]">  {{  OTs.labor9  }}</div>
                <div class="labores" :class="[ colorLabor (OTs.color10) ]"> {{  OTs.labor10 }}</div>
              </td>
              <td class="w-2/12 px-2 py-2 text-right ">
                {{ OTs.fecha_confirmada | FechaCorta }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-between mt-2 text-sm">
      <div class="flex space-x-1">
             <BtnCallToAction
                  @click.prevent="OTsEstadoProduccion"
                  size="small"
                  ref="ButtonLoading"
                  variant="success"
                  variant-type="normal"
                  colorIcon="white"
                  :showBtnAnimation="showBtnAnimation"
                >
            {{ $t('App.UpdateList')}}
          </BtnCallToAction>
     </div>
      <div class="flex space-x-1">
        <p class="mr-2">Convenciones de color utilizadas en las OT's</p>
        <div class="convenciones bg-verde">Finalizadas</div>
        <div class="convenciones bg-amarillo">Iniciadas</div>
        <div class="text-white convenciones bg-azul">Por Iniciar</div>
        <div class="text-white convenciones bg-rojo">Suspendidas</div>
      </div>
    </div>
  </div>
</template>

<script>
    import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
    import Terceros           from "@/models/Terceros";
    export default {
      name:'ClientesOtsEstado',
      components: { BtnCallToAction},
      data: () => ({
            showBtnAnimation : false,
            otsEnProduccion: [],
            busqueda:'',
            formData: {
                idTercero:0, 
                userCripack:false
            }
      }),
      
      

      mounted() {
          this.OTsEstadoProduccion();
      },

      methods: {
          OTsEstadoProduccion () {
             this.showBtnAnimation =  true;
             this.formData.idTercero   = this.$cookies.get("User").idtercero;
             this.formData.userCripack = this.$cookies.get("User").uso_web_empresa;   
             Terceros.OTsEstadoProduccion (  this.formData)
            .then( response => {
                this.otsEnProduccion = response.data;
                this.showBtnAnimation =  false;
            }) 
            
          },
          colorLabor ( color) {
              if ( color=='AMARILLO') return ' text-black bg-amarillo';
              if ( color=='AZUL')     return ' text-white bg-azul';
              if ( color=='ROJO')     return ' text-white bg-rojo';
              if ( color=='VERDE')    return ' text-black bg-verde';
          }
      },

      computed: {
        busquedaFiltrada() {
          return this.registros.filter(registro => {
            return registro.estilo
              .toLowerCase()
              .includes(this.busqueda.toLowerCase());
          });
        }
      }
    };
</script>

<style lang="postcss" scoped>
  .labores {
      @apply flex items-center justify-center w-16 h-6 px-2 py-2;
  }
  .convenciones {
    @apply flex items-center justify-center h-6 px-2 py-2;
  }

  .ali-center {
    @apply px-2 py-2 text-center
  }

  .ali-left {
    @apply px-2 py-2 text-left
  }
</style>