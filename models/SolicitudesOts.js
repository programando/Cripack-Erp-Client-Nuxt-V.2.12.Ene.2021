import Api from "@/config/Axios";

export default {
  async getTiposArreglo() {
    return Api.get("/solicitudes/ots/tipos/arreglo"  ) ;
  },

    async getSustratos() {
    return Api.get("/solicitudes/ots/sustratos"  ) ;
  },

 
}
