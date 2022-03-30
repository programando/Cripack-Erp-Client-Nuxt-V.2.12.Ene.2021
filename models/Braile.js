import Api from "@/config/Axios";

export default {
  
  async SendTextToTranscript(formData) {
    return Api.post("braile/transcripcion/textos", formData      ) ;
  },
  

 
}
