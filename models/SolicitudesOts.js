import Api from "@/config/Axios";

export default {
  async getTiposArreglo() {
    return Api.get("/solicitudes/ots/tipos/arreglo"  ) ;
  },

    async getSustratos() {
    return Api.get("/solicitudes/ots/sustratos"  ) ;
  },

     async getCalibres() {
    return Api.get("/solicitudes/ots/calibres"  ) ;
  },
     async getTirajes() {
    return Api.get("/solicitudes/ots/tirajes"  ) ;
  },
     async getFrecuencias() {
    return Api.get("/solicitudes/ots/frecuencias"  ) ;
  },
     async getMaquinas() {
    return Api.get("/solicitudes/ots/maquinas"  ) ;
  },
       async getAyudaPega() {
    return Api.get("/solicitudes/ots/ayuda-pega"  ) ;
  },
       async getPunzones() {
    return Api.get("/solicitudes/ots/punzones"  ) ;
  },
 
}
