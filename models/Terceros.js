import Api  from "@/config/Axios";
 

export default {
  

  async ultimasCincoCompras( IdTercero ) {
    return Api.post("clientes/ultimas/cinco/compras", { 'idtercero' :IdTercero } ) ;
  },
  async ultimasVisitas( IdTercero ) {
    return Api.post("clientes/ultimas/visitas", { 'idtercero' :IdTercero } ) ;
  },

  async buscarPorIdTercero( IdTercero ) {
    return Api.post("clientes/busqueda/idtercero", { 'idtercero' :IdTercero } ) ;
  },
  

  async buscarPorCodigo( codigoBuscar ) {
    return Api.post("clientes/busqueda/codigo", { 'codigo_tercero' :codigoBuscar } ) ;
  },

  async busqueda( textoBuscar ) {
    return Api.post("clientes/busqueda/texto", { 'filtroBusqueda' :textoBuscar } ) ;
  },

  async primerosVeinteClientes() {
    return Api.get("clientes/primeros/registros"  ) ;
  },

  async historialVentas(formData) {
    //console.log(formData);
    return Api.get("clientes/ots/historial", { params:   formData   } ) ;
  },

  async OTsEstadoProduccion(formData) {
    return Api.get("clientes/ots/estado", { params:   formData   }     ) ;
  },

}
