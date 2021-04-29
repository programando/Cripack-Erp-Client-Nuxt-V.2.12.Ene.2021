export default function ({ store, redirect, router }) {
   console.log(store.state.auth)
   if (store.state.auth.loggedIn) {
      return redirect('/dashboard');
   }
}