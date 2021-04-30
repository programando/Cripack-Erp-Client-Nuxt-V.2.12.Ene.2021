export default function ({app, redirect }) {
   
   let isLoguedIn = Boolean(app.$cookiz.get('logueado'));
   if ( isLoguedIn ) {
         return redirect('/dashboard');
   }
   
   //console.log( localStorage.getItem('Logueado') )
/*    if (store.state.auth.loggedIn) {
      
   } 
   
   export default function ({ app, res, query }) {
  if (query.lang) {
    app.$cookiz.set('lang', query.lang)
  }
}
   
   */

}