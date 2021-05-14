import Api  from "@/config/Axios";
 

export default {
  async historialVentas(formData) {
    //console.log(formData);
    return Api.get("/clientes/ots", { params:   formData   } ) ;
  },


}
