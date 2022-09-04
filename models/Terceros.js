import Api  from "@/config/Axios";
 
export default {
  

 
  
  async ventasValoresUltimos3AniosGruposSeleccionados ( IdTercero, gruposEstilos ) {
    return Api.post("clientes/ventas/ultimos/3/anios/productos/seleccionados", { 'IdTercero' :IdTercero, 'gruposEstilos': gruposEstilos} ) ;
  },

  async ventasUltimos3AniosGruposSeleccionados ( IdTercero, gruposEstilos ) {
    return Api.post("clientes/ventas/grupos/productos/seleccionados", { 'IdTercero' :IdTercero, 'gruposEstilos': gruposEstilos} ) ;
  },

  async productosUltimos3Anios ( IdTercero ) {
    return Api.post("clientes/productos/ultimos/3/anios", { 'IdTercero' :IdTercero} ) ;
  },


  async ventasUltimos3Anios ( IdTercero ) {
    return Api.post("clientes/ventas/ultimos/3/anios", { 'IdTercero' :IdTercero} ) ;
  },
  async productosVendidosUltimos3Anios ( Identificacion ) {
    return Api.post("clientes/productos/vedidos/ultimos/3/anios", { 'identificacion' :Identificacion} ) ;
  },


  async agendaAsistenciaMaquinasMesAnio( idmes,anio ) {
    return  Api.post("/agendamiento/asistencia", { 'idmes' :idmes, 'anio' :anio } ) ;
  },



    carteraPorCliente( NitCliente ) {
    return   Api.post("/SqlServer/cartera", { 'Nit_Tercero' :NitCliente } ) ;
  },



  async ultimasCincoCompras( IdTercero ) {
    return Api.post("clientes/ultimas/cinco/compras", { 'idtercero' :IdTercero } ) ;
  },

  async ultimasVisitas( IdTercero ) {
    return Api.post("clientes/ultimas/visitas", { 'idtercero' :IdTercero } ) ;
  },

  async buscarPorIdTercero( IdTercero ) {
    return Api.post("clientes/busqueda/idtercero", { 'idtercero' :IdTercero } ) ;
  },
  
  async busquedaPorNitCodNombreSucursal (textoBuscar ) {
    return Api.post("clientes/busqueda", { 'filtroBusqueda' :textoBuscar} ) ;
  },
  async clientesResumenDashBoard ( identificacion ) {
    return Api.post("clientes/resumen/dashBoard", { 'identificacion' :identificacion} ) ;
  },

  async clientesResumencotizDashBoard ( identificacion ) {
    return Api.post("clientes/resumen/dashBoard", { 'identificacion' :identificacion} ) ;
  },

  async clientesDashBoardOrdenesTrabajo ( identificacion ) {
    return Api.post("clientes/ordenes/trabajo", { 'identificacion' :identificacion} ) ;
  },
  async clientesDashBoardPqrs ( identificacion ) {
    return Api.post("clientes/pqrs", { 'identificacion' :identificacion} ) ;
  },


  async cotizacionesUltimos6Meses( identificacion) {
    return Api.post("clientes/cotizaciones", { 'identificacion' :identificacion} ) ;
  },

  async historialVentas(formData) {
    return     Api.post("clientes/ots/historial", formData ) ;
  },

  async OTsEstadoProduccion(formData) {
    return  Api.post("clientes/ots/estado",   formData       ) ;
  },


  async primerosVeinteClientesPorVendedor( idTerceroVendedor) {
    return Api.post("clientes/primeros/registros", {'idtercero_vendedor': idTerceroVendedor}  ) ;
  },
  
  async buscarPorCodigo( codigoBuscar, idTerceroVendedor ) {
    return Api.post("clientes/busqueda/codigo", { 'codigo_tercero' :codigoBuscar, 'idtercero_vendedor': idTerceroVendedor} ) ;
  },

  async busquedaPorVendedor( textoBuscar, idTerceroVendedor ) {
    return Api.post("clientes/busqueda/por/vendedor", { 'filtroBusqueda' :textoBuscar, 'idtercero_vendedor': idTerceroVendedor } ) ;
  },

  
}
