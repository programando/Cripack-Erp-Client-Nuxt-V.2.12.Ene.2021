import Api from "@/config/Axios";

export default {
  
  async getListadoActivos ( ) {
    return Api.get("/motivos/visitas/listado"    ) ;
  },
  

 
}
