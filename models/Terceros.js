import Api  from "@/config/Axios";
 

export default {
     async historialVentas( formData) {
        return Api.get("/clientes/ots", formData ) ;
  },


}
