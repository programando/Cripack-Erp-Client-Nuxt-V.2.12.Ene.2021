<template>
  <div
      class="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/background.jpg')"
    >
      <div class="w-6/12 text-center text-white font-latos">
        <h2 class="text-5xl">Oops!</h2>
        <h2 class=" text-9xl">404</h2>
        <p class="px-8 text-xl">El enlace que esta buscando no existe o fue eliminado. Puede volver a la <nuxt-link class="text-celesteClaro" to="/">pagina de incio</nuxt-link>  y continuar navegando o <nuxt-link class="text-celesteClaro" to="/customers/contact">contactarse con nosotros</nuxt-link></p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>