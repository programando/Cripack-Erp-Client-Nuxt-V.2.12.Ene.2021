import Api  from "@/config/Axios";
 

export default {
  async historialVentas(formData) {
    //console.log(formData);
    return Api.get("/clientes/historial/ots", { params:   formData   } ) ;
  },

  async OTsEstadoProduccion(idTercero) {
    return Api.get("/clientes/estado/ots", { params: { idTercero }   }  ) ;
  },

}
