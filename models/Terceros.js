import Api  from "@/config/Axios";
 

export default {
  
  async busqueda( textoBuscar ) {
    return Api.post("clientes/busqueda", { 'filtroBusqueda' :textoBuscar } ) ;
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
