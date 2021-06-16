import Api  from "@/config/Axios";
 

export default {
  async getTiposArreglo() {
    return Api.get("/solicitudes/ots/tipos/arreglo"  ) ;
  },

 
}
