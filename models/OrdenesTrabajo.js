import Api from "@/config/Axios";

export default {
   async SolicitudTroquelPlano ( formData ) {
    return Api.post("/ordenes-trabajo/solicitud/plano", formData      ) ;
  }, 
}
