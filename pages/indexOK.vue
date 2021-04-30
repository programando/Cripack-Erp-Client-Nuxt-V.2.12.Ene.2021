<template>
  <div class="flex mt-10 ml-10">
    <form @submit.prevent="login">
      <input  class="border-gray-500" type="text" v-model="form.email" placeholder="email"> <br>
      <input class="border-gray-500" type="password" v-model="form.password" placeholder="password"> <br>
      <button > Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL ='http://localhost:8000/';
export default {

  data: ()=> ({
      form: {
          email:'serviclientes@cripack.com', password:'1234567'
      }
  }),
  methods: {
      login() {
        axios.get('sanctum/csrf-cookie' ). then( () =>  {
          axios.post('login', this.form)
          .then( () =>{
            axios.get('/user').then( response => {
                console.log( response.data);
            })
          })
        })
      }
  },  
}
</script>