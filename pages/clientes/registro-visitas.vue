<template>
  <div class="relative h-screen pt-14">
    <div class="flex justify-center py-4 ">
      <div class="px-4 py-4 border shadow-xl ancho-registro">
        <h2 class="text-xl font-semibold text-center">Registro de visitas</h2>
        <div class="mx-4 mt-4">
          <div class="lg:flex lg:justify-center lg:space-x-10">
            <div class="flex justify-center space-x-10">
              <div class="w-60 lg:w-auto ">
                <p class="ml-10 text-sm">Código</p>
                <div class="flex space-x-2">
                  <button @click="buscarCliente = true">
                    <img class="h-6" src="/images/prismaticos.png" alt="" />
                  </button>
                  <input
                    class="w-32 px-2 py-1 text-xs text-center border rounded-sm focus:outline-none"
                    type="text"
                    v-model="codigo_tercero"
                    @keyup.enter="buscarClientePorCodigo"
                  />
                </div>
              </div>
            <div class="">
              <p class="text-sm">Nombre / Razón social</p>
              <input
                class="lg:w-64 w-60 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                disabled
                type="text"
                v-model="formCliente.nomtercero"
              />
              </div>
            </div>
            
            <div class="flex justify-center space-x-10 mt-4 lg:mt-0">
              <div class="">
                <p class="text-sm">Ciudad</p>
                <input
                  class="px-4 py-1 text-xs border rounded-sm w-60 focus:outline-none"
                  disabled
                  type="text"
                  v-model="formCliente.nommcipio"
                />
             </div>
              <div class="">
                <p class="text-sm">Vendedor</p>
                <input
                  class="px-4 py-1 text-xs border rounded-sm w-60 focus:outline-none"
                  disabled
                  type="text"
                  v-model="formCliente.nomvendedor"
                />
              </div>
            </div>

          </div>
          <div class="flex justify-around">
            <div class="">
              <div class="flex justify-center mt-4 lg:space-x-28 space-x-10">
                <div class="lg:flex lg:mr-2">
                  <p class="w-60 lg:w-64 text-sm">Cupo de crédito</p>
                  <input
                    class="lg:w-48 w-60 px-4 py-1 text-xs text-right border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.cupo_credito"
                  />
                </div>
                <div class="lg:flex">
                  <p class="w-56 text-sm">Persona encargada de pagos</p>
                  <input
                    class="lg:w-56 w-60 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.contacto_pagos"
                  />
                </div>
              </div>
              <div class="flex justify-center mt-4 lg:space-x-28 space-x-10 ">
                <div class="lg:flex lg:mr-2">
                  <p class="w-60 lg:w-64 text-sm">Extra cupo</p>
                  <input
                    class="lg:w-48 w-60  px-4 py-1 text-xs text-right border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.extra_cupo"
                  />
                </div>
                <div class="lg:flex lg:mr-2">
                  <p class="w-56 text-sm">Nro. teléfono</p>
                  <input
                    class="lg:w-56 w-60 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.contacto_pagos_celular"
                  />
                </div>
              </div>
              <div class="flex justify-center mt-4 lg:space-x-28 space-x-10">
                <div class="lg:flex lg:mr-2">
                  <p class="lg:w-64 w-60  text-sm">Día límite recepción facturas</p>
                  <input
                    class="lg:w-48 w-60 px-4 py-1 text-xs text-right border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.dia_limite_recibe_facturas"
                  />
                </div>
                <div class="lg:flex">
                  <p class="w-56 text-sm">Email</p>
                  <input
                    class="lg:w-56 w-60 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.contacto_pagos_email"
                  />
                </div>
              </div>
              <div class="mt-4 text-sm flex items-center space-x-10 flex-wrap mx-20 lg:mx-0 formulario">
                <p class="py-1">Documentos exigidos para el recibo de productos : </p>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full" disabled type="checkbox" name="" id="ordenCompra"  v-model="formCliente.rbo_prdcto_exg_oc">
                  <label for="ordenCompra">Ord. Compra</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full" disabled type="checkbox" name="" id="remision"  v-model="formCliente.rbo_prdcto_exg_rem" >
                  <label for="remision">Remisión</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full" disabled type="checkbox" name="" id="factura"  v-model="formCliente.rbo_prdcto_exg_cert_cldad"  >
                  <label for="factura">Factura</label>
                </div>
                <div class="py-1 flex items-center space-x-2 checkbox">
                  <input class="h-5 w-5 rounded-full" disabled type="checkbox" name="" id="certificadoCalidad"  v-model="formCliente.rbo_prdcto_exg_fac" >
                  <label for="certificadoCalidad">Certificado de Calidad</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mx-4 mt-10">
              <h2  class="text-sm font-semibold">Historial de visitas</h2>
              <div class="flex">
                
                <button @click="showCarteraCliente" class="flex items-center space-x-2" >
                  <img class="h-8 ml-5" src="/images/pesos.png" alt="" />
                  <p class="text-sm">Cartera del Cliente</p>
                </button>

                <button @click="registrarNuevaVisita" class="flex items-center space-x-2" >
                  <img class="h-8 ml-5" src="/images/registros.png" alt="" />
                  <p class="text-sm">Registrar nueva visita</p>
                </button>
              </div>
            </div>
            <div class="mx-4 mt-4 alto-table">
              <table class="w-full border-t">
                <thead class="w-full border ">
                  <tr class="w-full bg-white text-azul ">
                    <th class="w-1/12 text-xs border table-sticky">Fecha </th>
                    <th class="w-1/12 text-xs border table-sticky">Persona contacto</th>
                    <th class="w-1/12 text-xs border table-sticky"> Motivo Visita </th>
                    <th class="w-3/12 text-xs border table-sticky">Resultado</th>
                    <th class="w-3/12 text-xs border table-sticky"> Siguiente Paso </th>
                    <th class="w-1/12 text-xs border table-sticky">Próxima visita</th>
                    
                    <th class="w-1/12 text-xs border table-sticky">  Detalles </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="" v-for="visita in historialVisitas" :key="visita.idregistro">
                    <td class="w-1/12 px-2 py-2 text-xs border text-azul"> {{visita.fecha_visita | FechaLarga }} </td>
                    <td class="w-1/12 px-4 py-2 text-xs text-left border">{{ visita.contacto | Capitalize}} </td>
                    <td class="w-1/12 px-4 py-2 text-xs text-left border"> {{ visita.nommtvovisita | Capitalize }} </td>
                    <td class="w-3/12 px-4 py-2 text-xs text-left border"> {{ visita.short_resultado | Capitalize}} </td>
                    <td class="w-3/12 px-4 py-2 text-xs text-left border"> {{visita.short_siguiente_paso | Capitalize}}</td>
                    <td class="w-1/12 px-4 py-2 text-xs text-left border"> {{visita.fecha_proxvisita  | FechaLarga}} </td>
                    
                    <td class="w-1/12 h-full text-xs text-center border " >
                      <button @click="sendRegistroVisita(visita)" class="h-full">
                        <img class="h-8" src="/images/buscar.png" alt="" />
                      </button>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
            <div class="flex items-center justify-between mx-4 mt-6">
              <h2 class="text-sm font-semibold">Historial de compras</h2>
            </div>
            <div class="mx-4 mt-4 alto-table2">
              <table class="w-full">
                <thead class="w-full table-sticky">
                  <tr class="w-full py-1 border text-azul">
                    <th class="w-1/12 text-xs border">#Ot</th>
                    <th class="w-3/12 text-xs border">Referencia</th>
                    <th class="w-1/12 text-xs border">Estilo </th>
                    <th class="w-1/12 text-xs border">Tipo trabajo</th>
                    <th class="w-1/12 text-xs border">Solicitada</th>
                    <th class="w-1/12 text-xs border">Entregada</th>
                    <th class="w-1/12 text-xs border">Últ.compra</th>
                    <th class="w-1/12 text-xs border">Cant.Tq/Mes</th>
                    <th class="w-1/12 text-xs border">Promo.Últ.Año</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="compra in ultimasCincoCompras" :key="compra.idregistro_ot">
                    <td class="px-2 py-2 text-xs border text-azul"> {{ compra.numero_ot                     | NumeroEntero  }}</td>
                    <td class="px-4 py-2 text-xs text-left border"> {{ compra.referencia                                    }}</td>
                    <td class="px-4 py-2 text-xs text-left border"> {{ compra.nomestilotrabajo              | Capitalize    }}</td>
                    <td class="px-4 py-2 text-xs text-left border"> {{ compra.nomtipotrabajo                | Capitalize    }}</td>
                    <td class="px-4 py-2 text-xs text-left border"> {{ compra.fecha_solicitud               | FechaLarga    }}</td>
                    <td class="px-4 py-2 text-xs text-left border"> {{ compra.fecha_terminada               | FechaLarga    }}</td>
                    <td class="px-4 py-2 text-xs text-right border">{{ compra.vr_compra                     | NumeroEntero  }}</td>
                    <td class="px-4 py-2 text-xs text-right border">{{ compra.promedio_tq_comprados_mes     | NumeroEntero  }}</td>
                    <td class="px-4 py-2 text-xs text-right border">{{ compra.promedio_compras_ult_anio     | NumeroEntero  }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal registrar visita -->
    <div v-if="registrarVisita">
      <RegistrarVisita @closeRegistrarVisita = 'closeRegistrarVisita' @visitaGrabada = 'visitaGrabada' :datosCliente="formCliente" :datosVisita="historialVisitas"/>
    </div>
    
    <!-- modal cartera cliente -->
    <div v-if="carteraCliente">
      <CarteraCliente @closeCarteraCliente = 'closeCarteraCliente'  />
    </div>

    <!-- modal buscarCliente -->
    <div v-if="buscarCliente">
      <BuscarCliente @getIdTerceroCliente = "getIdTerceroCliente" />
    </div>

    <!-- modal detalleVisita -->
    <div v-if="detalleVisita">
      <DetalleVisita @closeDetalleVisita = 'closeDetalleVisita' :datosVisita="registroVisita"/>
    </div>
    
  </div>
</template>

<script>
 
      import TercerosClientes from '@/models/Terceros';
      import BuscarCliente from '@/components/modals/BuscarCliente.vue'
      import RegistrarVisita from '@/components/modals/RegistrarVisita.vue'
      import CarteraCliente from '@/components/modals/CarteraCliente.vue'
      import DetalleVisita from '@/components/modals/DetalleVisita.vue'
      import Messages           from "@/mixins/sweetalert2";
      var Numeral = require("numeral");

      export default {
        name: "registroVisitas",
        components: {
          BuscarCliente,
          RegistrarVisita,
          DetalleVisita,
          CarteraCliente
        },
        mixins: [ Messages],
        data() {
          return {
            registrarVisita: false,
            buscarCliente: false,
            detalleVisita : false,
            carteraCliente: false,
            codigo_tercero:'',
            registroVisita:{},
            formCliente : {
                'idtercero'                 : 0,
                'codigo_tercero'            : '',
                'nomtercero'                : '',
                'nommcipio'                 : '',
                'contacto'                  : '',
                'nomvendedor'               : '',
                'contacto_pagos'            : '',
                'cupo_credito'              : 0,
                'contacto_pagos_celular'    : '',
                'contacto_pagos_email'      : '',
                'extra_cupo'                : 0,
                'dia_limite_recibe_facturas': 0,
                'rbo_prdcto_exg_oc'         : false,
                'rbo_prdcto_exg_fac'        : false,
                'rbo_prdcto_exg_rem'        : false,
                'rbo_prdcto_exg_cert_cldad' : false
            },
            historialVisitas:[{'siguiente_paso' : '', 'resultados' :'' }],
            ultimasCincoCompras:[],
            idTerceroVendedor:0,
          };
        },
        mounted() {
            this.idTerceroVendedor = this.$cookies.get("User").idtecero_vendedor;
   
        },

        methods: {
            showCarteraCliente() {
              if ( this.clienteIsSelected() == false ) {
                  return ;
              }
              this.carteraCliente = true
            },

            visitaGrabada() {
              this.formCliente         = {};
              this.registroVisita      = [];
              this.historialVisitas    = [];
              this.ultimasCincoCompras = [];
              this.registrarVisita     = false;
              this.codigo_tercero      = '';
            },
          registrarNuevaVisita() {
              if ( this.clienteIsSelected() == false ) {
                  return ;
              }
              this.registrarVisita = true;
          } ,

          clienteIsSelected() { 
            if ( this.formCliente.idtercero === 0   ) {
                  this.$swal('Consulte uno de los clientes para continuar!');
                  return false;
              }
             return true;
            },

          sendRegistroVisita ( registroVisita ){
              this.detalleVisita = true;
              this.registroVisita = registroVisita;

          },
          getUltimasCincoCompras ( IdTercero) {
              TercerosClientes.ultimasCincoCompras ( IdTercero ) 
              .then ( response => {
                  this.ultimasCincoCompras = response.data;
              })
          },

          getIdTerceroCliente( CodTercero ) {
            
            if ( CodTercero == -1) { this.buscarCliente = false ; return;   }
                TercerosClientes.buscarPorCodigo (CodTercero,  this.idTerceroVendedor  )
                .then( response => {

                    this.setDataResponse ( response.data[0]);
                    this.buscarCliente = false 
                })
          },

          getUltimasVisitasCliente ( Idtercero ) {
              TercerosClientes.ultimasVisitas (Idtercero )
              .then ( response => {
                 if ( response.data.length > 0 ){
                    this.historialVisitas = response.data ;
                 }
              })
          },

          buscarClientePorCodigo ( ) {
            TercerosClientes.buscarPorCodigo ( this.codigo_tercero, this.idTerceroVendedor )
              .then( response => {
                  if (response.data=='NoOk' ){
                        this.Message("Cliente no encontrado" ,"Cliente no registrado en el sistema o no figura bajo su registro.",'error', "Cerrar" );
                  }else {
                    this.setDataResponse ( response.data[0]);
                  }
              })
          },

          closeRegistrarVisita() {
            this.registrarVisita = false
          },

          closeDetalleVisita() {
            this.detalleVisita = false
          },

          closeCarteraCliente() {
            this.carteraCliente = false
          },

          setDataResponse ( data ) {
                this.codigo_tercero                         = data.codigo_tercero;
                this.formCliente.idtercero                  = data.idtercero;
                this.formCliente.nomtercero                 = data.nomtercero;
                this.formCliente.nommcipio                  = data.nommcipio;
                this.formCliente.nomvendedor                = data.nomvendedor;
                this.formCliente.codigo_tercero             = data.codigo_tercero;
                this.formCliente.cupo_credito               = Numeral(data.cupo_credito).format('0,0');
                this.formCliente.contacto                   = data.contacto;
                this.formCliente.contacto_pagos_celular     = data.contacto_pagos_celular;
                this.formCliente.contacto_pagos_email       = data.contacto_pagos_email;
                this.formCliente.extra_cupo                 = Numeral(data.extra_cupo).format('0,0');
                this.formCliente.dia_limite_recibe_facturas = data.dia_limite_recibe_facturas;
                this.formCliente.rbo_prdcto_exg_oc          = data.rbo_prdcto_exg_oc;
                this.formCliente.rbo_prdcto_exg_fac         = data.rbo_prdcto_exg_fac;
                this.formCliente.rbo_prdcto_exg_rem         = data.rbo_prdcto_exg_rem;
                this.formCliente.rbo_prdcto_exg_cert_cldad  = data.rbo_prdcto_exg_cert_cldad;
 
                this.getUltimasVisitasCliente ( data.idtercero ) ;
                this.getUltimasCincoCompras   ( data.idtercero ) ;
          }

        }

      };
</script>

<style scope>
.width {
  width: 258px;
}

.ancho-registro {
  width: 1100px;
}

.alto-table {
  height: 230px;
  overflow-y: scroll;
  
}

.alto-table2 {
  height: 200px;
  overflow-y: scroll;
}

.table-sticky {
  position: sticky;
  top: 0;
  background: white;
  
  
}


@media screen and (min-width: 1300px) {
  .ancho-registro {
    width: 1500px;
  }
}

@media screen and (min-width: 1500px) {
  .ancho-registro {
    width: 1700px;
  }
}




/* checkbox */
.formulario h2 {
    font-size: 16px;
    color: #001F3F;
    margin-bottom: 20px;
    margin-left: 20px; 
}

.formulario > div {
    padding: 20px 0;
    
}
  
  .formulario .checkbox label {
    display: inline-block;
    cursor: pointer;
    color: #002C76;
    position: relative;
    padding: 5px 15px 5px 51px;
    font-size: 1em;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease; 
  }

  
  .formulario .checkbox label:hover {
      background: rgba(255, 65, 54, 0.1); 
  }

  
  .formulario .checkbox label:before {
      content: "";
      display: inline-block;
      width: 17px;
      height: 17px;
      position: absolute;
      left: 15px;
      border-radius: 50%;
      background: none;
      border: 3px solid #002C76;
  }


  .formulario .checkbox label:before {
    border-radius: 3px;
  }

  .formulario .checkbox input[type="checkbox"] {
    display: none;   
  }

  .formulario .checkbox input[type="checkbox"]:checked + label:before {
    display: none;
  }

  .formulario .checkbox input[type="checkbox"]:checked + label {
    background: #002C76;
    color: #fff;
    padding: 5px 15px; 
  }

</style>
