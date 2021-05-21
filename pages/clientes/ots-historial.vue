<template>
  <div class="py-24 mx-2 font-Raleway">
    <div class="flex justify-between my-2">
      <h3 class="mt-1 text-2xl">
        Historial Órdenes de trabajo
      </h3>
      <div class="mt-2">
        <div class="flex space-x-2">
          <!-- calendario1 -->
          <client-only>
            <date-picker v-model="fechaIni" valueType="format"></date-picker>
          </client-only>
          <!-- calendario2 -->
          <client-only>
            <date-picker v-model="fechaFin" valueType="format"></date-picker>
          </client-only>

           <BtnCallToAction
              @click.prevent  = "getOts"
              ref             = "ButtonLoading"
              size            = "small"
              variant         = "success"
              variant-type    = "normal"
            :showBtnAnimation = "showBtnAnimation" >
            Consultar Ot's
          </BtnCallToAction>
        
        </div>
      </div>
      <div class="flex items-center">
        <div class="z-10 -mr-8">
          <font-awesome-icon class="" :icon="['fas', 'search']" />
        </div>

        <input
          class="px-10 py-1 border-2 focus:outline-none"
          type="text"
          v-model="busqueda"
          placeholder="Buscar por referencia"
        />
      </div>
    </div>
    <div class="w-full text-left">
      <div class="bg-white rounded shadow-md ">
        <table class="w-full">
          <thead class="flex w-full margen">
            <tr class="flex w-full text-sm text-gray-600 bg-gray-200">
              <th class="w-1/12 ali-center">Estado</th>
              <th class="w-1/12 ali-center">#OT</th>
              <th class="w-1/12 ali-center">Solicitud</th>
              <th class="w-1/12 ali-center">Terminada</th>
              <th class="w-4/12 ali-center">Referencia</th>
              <th class="w-2/12 ali-center">Estilo</th>
              <th class="ali-center w-14">Can</th>
              <th class="ali-center w-14">Cab</th>
              <th class="w-20 ali-center">#Factura</th>
              <th class="w-1/12 ali-center">Vr Venta</th>
              <th class="w-20 ali-center">#Guía</th>
              <th class="w-1/12 ali-center">Fecha</th>
            </tr>
          </thead>
          <tbody
            class="flex flex-col w-full overflow-y-scroll text-xs text-gray-600 bg-white"
            style="height: 64vh;"
          >
            <tr 
              v-for="venta in filtroReferencia"
              :key="venta.idregistro_ot"
              class="flex w-full text-xs bg-white border-b border-gray-200 hover:bg-gray-100 tr" >
              <td class="flex items-center justify-start w-1/12 px-2 py-2 space-x-2 text-left">
                 <div  v-if="venta.terminada" class="flex items-center justify-center h-6 px-2 py-2 text-xs text-white bg-green-700 border-green-700 rounded-lg ">Terminada</div>
                 <div v-else class="flex items-center justify-center h-6 px-2 py-2 text-xs bg-yellow-300 border-yellow-300 rounded-lg">En proceso</div>
              </td>
                <td class="w-1/12 ali-center">         {{ venta.numero_ot }}                     </td>
                <td class="w-1/12 ali-right ">         {{ venta.fecha_solicitud | FechaLarga }}  </td>
                <td class="w-1/12 ali-right ">         {{ venta.fecha_terminada | FechaLarga}}   </td>
                <td class="w-4/12 ali-left ">          {{ venta.referencia }}                    </td>
                <td class="w-2/12 ali-left ">          {{ venta.nomestilotrabajo }}              </td>
                <td class="ali-rigth w-14 ">           {{ venta.cantidad }}                      </td>
                <td class="ali-rigth w-14 ">           {{ venta.cabida }}                        </td>
                <td class="w-20 ali-right ">           {{ venta.numero_factura }}                </td>
                <td class="w-1/12 ali-right ">         {{ venta.vrVenta }}                       </td>
                <td class="w-20 ali-right text-decoration:underline text-blue">      
                  
                  <a  :href="'https://www.tcc.com.co/rastreo?tipo=RE&documento='+ venta.nro_guia" _target="_blank"> {{ venta.nro_guia }} </a>    

                      
                </td>
                <td class="w-1/12 ali-left">           {{ venta.fecha_entrega | FechaLarga }}    </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    var Moment = require('moment');
    import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
    import Terceros           from "@/models/Terceros";
    
    
    export default {
      name:'ClientesHistorialForm',
      components : { BtnCallToAction },
      data() {
        return {
          fechaIni        : '',
          fechaFin        : '',
          busqueda        : "",
          Ventas          : [],
          showBtnAnimation: false,
          formParams: {
              idTercero:0,
              fechaIni: '',
              fechaFin:'',
              userCripack: false
          }
        };
      },
      mounted() {
        this.fechaIni = Moment().subtract(30,'d').format('YYYY-MM-DD');
        this.fechaFin = Moment().format('YYYY-MM-DD');
        this.getOts();
        this.showBtnAnimation     = false;
      },

    methods: {
            getOts() {
              this.getParams(); 
              Terceros.historialVentas(this.formParams)
              .then(response => {
                  this.Ventas = response.data.data;
                  this.showBtnAnimation = false;
                }
              ); 
              
            },
            getParams() {
                  this.formParams.fechaFin    = this.fechaFin +' 23:59:59';
                  this.formParams.fechaIni    = this.fechaIni +' 00:01:01';
                  this.formParams.idTercero   = this.$cookies.get("User").idtercero;
                  this.formParams.userCripack = this.$cookies.get("User").uso_web_empresa;
                  this.showBtnAnimation     = true;
            }
    },

      computed: {
        filtroReferencia() {
          return this.Ventas.filter(row => {
            return row.referencia
              .toLowerCase()
              .includes(this.busqueda.toLowerCase());
          });
        }
      }
    };
</script>

<style lang="postcss" scoped>
.margen {
  padding-right: 16px;
}

.ali-center {
    @apply px-2 py-2 text-center
}

.ali-left {
  @apply px-2 py-2 text-left
}

.ali-right {
  @apply px-2 py-2 text-right
}
</style>
