import Api  from "@/config/Axios";
import Csrf from "@/config/Csrf";

export default {
    async getCokie() {
      await Csrf.getCookie();
    },
  
      async login ( formData ) {       
        return  Api.post('usuarios/login', formData);
      },

      async logout() {
        return Api.post('usuarios/logout');
      },

      async auth(){
         return Api.get('user');
      },
      
      async resetPassword(formData) {
        return Api.post('usuarios/reset/password', formData);
      },
      async updatePassword(formData) {
        return Api.post('usuarios/update/password', formData);
      },
      
  async getDataToRegister(formData) {
         return Api.get('usuarios/registro', { params:   formData   } );
      },       
   async registroUsuarioWeb(formData) {
         return Api.post('usuarios/registro', { params:   formData   } );
      },         
}
