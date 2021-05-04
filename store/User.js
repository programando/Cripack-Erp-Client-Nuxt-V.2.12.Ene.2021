 
export const state = () => ({
   IdTercero     : 0,
   IdTercLogueado: 0,
   Logueado      : false,
   User: null,
   NomUser: '',
});

export const  getters = {
   getUser ( state ) {
      return state.User;
   },   
   isLoggin(state) {
      return state.Logueado;
   }
}

export const actions = {
   SetUser ( {commit}, User) {
      commit('SET_USER', User )
   },
   UserLogout({ commit }) {
       commit('USER_LOGOUT' )
   }
}

export const mutations = {
   SET_USER(  state  , UserData) {
      state.User           = UserData
      state.Logueado       = true;
      //state.IdTercLogueado = UserData.idtercero;
 
   },
   
   USER_LOGOUT(state) {
      state.IdTercero      = 0;
      state.IdTercLogueado = 0;
      state.Logueado       = false;
      state.NomUser        = '';
      state.User           = null;
   },

 
    
}