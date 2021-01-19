import Api  from "@/config/Axios";
 

export default {

      async ventas() {
        return Api.get('/sales');
  },

         async compare() {
        return Api.get('/sales/compare');
  },


 
  
  
 
 
}
