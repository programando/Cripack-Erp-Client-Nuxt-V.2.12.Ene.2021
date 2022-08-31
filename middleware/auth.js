export default function ({app, redirect }) {
   
   let isLoguedIn = Boolean(app.$cookies.get('User').logueado);
   if (!isLoguedIn) {
         return redirect('/');
   }
   


}