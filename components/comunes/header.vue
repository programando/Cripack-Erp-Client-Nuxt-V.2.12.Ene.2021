<template>
  <div class="fixed z-10 flex items-center justify-between w-full bg-azul">
    <div class="flex">
      <img class="h-20" src="/images/logo.png" alt=""/>
      <div class="mt-4 ml-4 text-white">
        <h3>Bienvenido(a)</h3>
        <h3 class="font-semibold">CARTONES AMERICA S.A</h3>
      </div>
    </div>
    <div class="flex mr-4 space-x-6">
      <NavLinks 
        text="Historial"
        to="/"
      />
      <NavLinks 
        text="Estado OT's"
        to="/"
      />
      <NavLinks 
        text="Ventas"
        to="/"
      />
      <NavLinks 
        text="Braille"
        to="/"
      />
      <NavLinks 
        text="Contacto"
        to="/"
      />
      <NavLinks 
        text="Comercial"
        to="/"
      />
    </div>
  </div>
</template>

<script>
import NavLinks from '@/components/comunes/navLinks'
export default {
  name: "Header",
  components: {
    NavLinks
  }

};
</script>

<style>

</style>
