import Api from "@/config/Axios";

export default {
  
  async grbarNuevoRegistro ( formData ) {
    return Api.post("/terceros/clientes/visitas/grabar/nuevo-registro",    formData ) ;
  },
  

  async getListadoActivos ( ) {
    return Api.get("/motivos/visitas/listado"    ) ;
  },
  

 
}
