import Api  from "@/config/Axios";
 

export default {
  async historialVentas(formData) {
    //console.log(formData);
    return Api.get("clientes/ots/historial", { params:   formData   } ) ;
  },

  async OTsEstadoProduccion(formData) {
    return Api.get("clientes/ots/estado", { params:   formData   }     ) ;
  },

}
