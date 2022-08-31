export default function ({app, redirect }) {
   
   let isLoguedIn = Boolean(app.$cookies.get('logueado'));
   if ( isLoguedIn ) {
         return redirect('/clientes/ots-historial');
   }


}