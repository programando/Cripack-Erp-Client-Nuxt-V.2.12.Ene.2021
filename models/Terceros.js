import Api  from "@/config/Axios";
 
export default {
  

  async productosUltimos3Anios ( IdTercero ) {
    return Api.post("clientes/productos/ultimos/3/anios", { 'IdTercero' :IdTercero} ) ;
  },


  async ventasUltimos3Anios ( IdTercero ) {
    return Api.post("clientes/ventas/ultimos/3/anios", { 'IdTercero' :IdTercero} ) ;
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
  

  async buscarPorCodigo( codigoBuscar, idTerceroVendedor ) {
    return Api.post("clientes/busqueda/codigo", { 'codigo_tercero' :codigoBuscar, 'idtercero_vendedor': idTerceroVendedor} ) ;
  },

  async busquedaPorVendedor( textoBuscar, idTerceroVendedor ) {
    return Api.post("clientes/busqueda/por/vendedor", { 'filtroBusqueda' :textoBuscar, 'idtercero_vendedor': idTerceroVendedor } ) ;
  },

  async busquedaPorNitCodNombreSucursal (textoBuscar ) {
    return Api.post("clientes/busqueda", { 'filtroBusqueda' :textoBuscar} ) ;
  },


  async primerosVeinteClientesPorVendedor( idTerceroVendedor) {
    return Api.post("clientes/primeros/registros", {'idtercero_vendedor': idTerceroVendedor}  ) ;
  },

  async historialVentas(formData) {
    return     Api.post("clientes/ots/historial", formData ) ;
  },

  async OTsEstadoProduccion(formData) {
    return  Api.post("clientes/ots/estado",   formData       ) ;
  },

  // Esta es una prueba.
}
