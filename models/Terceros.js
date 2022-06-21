import Api  from "@/config/Axios";
 
export default {
  

  async carteraPorCliente( NitCliente ) {
    return await Api.post("/SqlServer/cartera", { 'Nit_Tercero' :NitCliente } ) ;
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

  async busqueda( textoBuscar, idTerceroVendedor ) {
    return Api.post("clientes/busqueda/texto", { 'filtroBusqueda' :textoBuscar, 'idtercero_vendedor': idTerceroVendedor } ) ;
  },

  async primerosVeinteClientesPorVendedor( idTerceroVendedor) {
    return Api.post("clientes/primeros/registros", {'idtercero_vendedor': idTerceroVendedor}  ) ;
  },

  async historialVentas(formData) {
    return     Api.post("clientes/ots/historial", formData ) ;
  },

  async OTsEstadoProduccion(formData) {
    return await Api.post("clientes/ots/estado",   formData       ) ;
  },

  // Esta es una prueba.
}
