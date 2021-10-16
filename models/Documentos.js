import Api from "@/config/Axios";

export default {
  
   async getDocuments ( ) {
    return Api.get("/documentacion"   ) ;
  },

  
  async pdfView( pdfFile ) {
     
    return Api.get("/documentacion/download/file/", { params: {  pdfFile }   }   ) ;
  },

}
