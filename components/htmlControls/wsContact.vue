<template>
  <div class="absolute cursor-pointer contenedor-principal ">
    <nuxt-link class="flex items-center contenedor" to="/">
      <img class="z-20 h-14 imagen" src="/images/whatsapp.svg" alt="" />
      <div
        class="z-10 py-1 text-sm text-white bg-green-600 rounded-full cursor-pointer px-14 boton "
      >
        <p>Acesoria inmediata</p>
        <p class="text-center">por Whatsapp</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'wsContact'
};
</script>

<style>


.contenedor {
  height: 50px;
  width: 270px;
  transition: width 0.8s;
}

.boton {
  display: none;
}

.imagen {
  margin-right: -50px;
  margin-left: 200px;
  transition: width 0.8s;
}

.contenedor:hover > .imagen {
  margin-left: 0;
}

.contenedor:hover > .boton {
  display: block;
}

.contenedor:hover {
  width: 300px;
}
</style>
