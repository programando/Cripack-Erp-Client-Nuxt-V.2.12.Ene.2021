import Api  from "@/config/Axios";
 

export default {

      async historialVentas( $url) {
        return Api.get($url);
  },

 
 
}
