<template>
  <div class="relative pt-14">
    <div class="flex justify-center py-10 ">
      <div class="px-4 py-4 border shadow-xl ancho-registro">
        <h2 class="text-xl font-semibold text-center">Registro de visitas</h2>
        <div class="mx-4 mt-4">
          <div class="flex justify-center space-x-10">
            <div class="">
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
                class="w-64 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                disabled
                type="text"
                v-model="formCliente.nomtercero"
              />
            </div>
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
          <div class="flex justify-center">
            <div class="">
              <div class="flex justify-center mt-10 space-x-20">
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Cupo de crédito</p>
                  <input
                    class="w-48 px-4 py-1 text-xs text-right border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.cupo_credito"
                  />
                </div>
                <div class="flex space-x-4">
                  <p class="w-56 text-sm">Persona encargada de pagos</p>
                  <input
                    class="w-56 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.contacto_pagos"
                  />
                </div>
              </div>
              <div class="flex justify-center mt-4 space-x-20">
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Extra cupo</p>
                  <input
                    class="w-48 px-4 py-1 text-xs text-right border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.extra_cupo"
                  />
                </div>
                <div class="flex space-x-4">
                  <p class="w-56 text-sm">Nro. teléfono</p>
                  <input
                    class="w-56 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.contacto_pagos_celular"
                  />
                </div>
              </div>
              <div class="flex justify-center mt-4 space-x-20">
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Día límite recepción facturas</p>
                  <input
                    class="w-48 px-4 py-1 text-xs text-right border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.dia_limite_recibe_facturas"
                  />
                </div>
                <div class="flex space-x-4">
                  <p class="w-56 text-sm">Email</p>
                  <input
                    class="w-56 px-4 py-1 text-xs border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                    v-model="formCliente.contacto_pagos_email"
                  />
                </div>
              </div>
            </div>
            
 
          </div>
          <div>
            <div class="flex items-center justify-between mx-4 mt-10">
              <h2 class="text-sm font-semibold">Historial de visitas</h2>
              <button
                @click="registrarVisita = true"
                class="flex items-center space-x-2"
              >
                <img class="h-8 ml-5" src="/images/buscar.png" alt="" />
                <p class="text-sm">Registrar nueva visita</p>
              </button>
            </div>
            <div class="mx-4 mt-4 alto-table">
              <table class="w-full">
                <thead class="w-full py-1">
                  <tr class="w-full border text-azul">
                    <th class="w-1/12 text-xs border">Fecha </th>
                    <th class="w-1/12 text-xs border">Persona contacto</th>
                    <th class="w-1/12 text-xs border"> Motivo Visita </th>
                    <th class="w-3/12 text-xs border">Resultado</th>
                    <th class="w-3/12 text-xs border"> Siguiente Paso </th>
                    <th class="w-1/12 text-xs border">Próxima visita</th>
                    <th class="w-1/12 text-xs border">Tipo Visita </th>
                    <th class="w-1/12 text-xs border">  Detalles </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="visita in historialVisitas" :key="visita.idregistro">
                    <td class="w-1/12 px-2 py-2 text-xs border text-azul"> {{visita.fecha_visita | FechaLarga }} </td>
                    <td class="w-1/12 px-4 py-2 text-xs text-left border">{{ visita.contacto}} </td>
                    <td class="w-1/12 px-4 py-2 text-xs text-left border"> {{ visita.nommtvovisita | Capitalize }} </td>
                    <td class="w-3/12 px-4 py-2 text-xs text-left border"> {{ visita.resultados | Capitalize}} </td>
                    <td class="w-3/12 px-4 py-2 text-xs text-left border"> {{visita.siguiente_paso | Capitalize}}</td>
                    <td class="w-1/12 px-4 py-2 text-xs text-left border"> {{visita.fecha_proxvisita  | FechaLarga}} </td>
                    <td class="w-1/12 px-4 py-2 text-xs text-left border"> {{ visita.nom_tipo_visita | Capitalize  }} </td>
                    <td class="w-1/12 h-full text-xs text-center border " >
                      <button @click="detalleVisita = true" class="h-full">
                        <img class="h-4" src="/images/ver.png" alt="" />
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
                <thead class="w-full">
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
      <RegistrarVisita @closeRegistrarVisita = 'closeRegistrarVisita' />
    </div>
    

    <!-- modal buscarCliente -->
    <div v-if="buscarCliente">
      <BuscarCliente @getIdTerceroCliente = "getIdTerceroCliente" />
    </div>

    <!-- modal detalleVisita -->
    <div v-if="detalleVisita">
      <DetalleVisita @closeDetalleVisita = 'closeDetalleVisita' />
    </div>
    
  </div>
</template>

<script>
 
      import TercerosClientes from '@/models/Terceros';
      import BuscarCliente from '@/components/modals/BuscarCliente.vue'
      import RegistrarVisita from '@/components/modals/RegistrarVisita.vue'
      import DetalleVisita from '@/components/modals/DetalleVisita.vue'
      
      var Numeral = require("numeral");

      export default {
        name: "registroVisitas",
        components: {
          BuscarCliente,
          RegistrarVisita,
          DetalleVisita
        },
        data() {
          return {
            registrarVisita: false,
            buscarCliente: false,
            detalleVisita : false,
            codigo_tercero:'',
            formCliente : {
                'idtercero': 0,
                'codigo_tercero' : '',
                'nomtercero' : '',
                'nommcipio' : '',
                'contacto' : '',
                'nomvendedor' : '',
                'contacto_pagos' : '',
                'cupo_credito' : 0,
                'contacto_pagos_celular' : '',
                'contacto_pagos_email' : '',
                'extra_cupo' : 0,
                'dia_limite_recibe_facturas' : 0,
            },
            historialVisitas:[],
            ultimasCincoCompras:[],
          };
        },

        methods: {

          getUltimasCincoCompras ( IdTercero) {
              TercerosClientes.ultimasCincoCompras ( IdTercero ) 
              .then ( response => {
                  this.ultimasCincoCompras = response.data;
              })
          },

          getIdTerceroCliente( CodTercero ) {
            if ( CodTercero == -1) { this.buscarCliente = false ; return;   }
                TercerosClientes.buscarPorCodigo (CodTercero )
                .then( response => {
                    this.setDataResponse ( response.data[0]);
                    this.buscarCliente = false 
                })
          },

          getUltimasVisitasCliente ( Idtercero ) {
              TercerosClientes.ultimasVisitas (Idtercero )
              .then ( response => {
                  this.historialVisitas = response.data ;
              })
          },

          buscarClientePorCodigo ( ) {
            TercerosClientes.buscarPorCodigo ( this.codigo_tercero )
              .then( response => {
                  this.setDataResponse ( response.data[0]);
              })
          },

          closeRegistrarVisita() {
            this.registrarVisita = false
          },

          closeDetalleVisita() {
            this.detalleVisita = false
          },

          setDataResponse ( data ) {
                this.codigo_tercero     =  data.codigo_tercero;
                this.formCliente.idtercero = data.idtercero;
                this.formCliente.nomtercero = data.nomtercero;
                this.formCliente.nommcipio = data.nommcipio;
                this.formCliente.nomvendedor = data.nomvendedor;
                this.formCliente.codigo_tercero = data.codigo_tercero;
                this.formCliente.cupo_credito = Numeral(data.cupo_credito).format('0,0');
                this.formCliente.contacto = data.contacto;
                this.formCliente.contacto_pagos_celular = data.contacto_pagos_celular;
                this.formCliente.contacto_pagos_email = data.contacto_pagos_email;
                this.formCliente.extra_cupo = Numeral(data.extra_cupo).format('0,0');
                this.formCliente.dia_limite_recibe_facturas = data.dia_limite_recibe_facturas;
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
  height: 200px;
  overflow: scroll;
}

.alto-table2 {
  height: 200px;
  overflow: scroll;
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

</style>
