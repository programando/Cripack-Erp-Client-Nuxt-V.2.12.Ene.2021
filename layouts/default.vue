<template>
  <div class="font-Raleway">
   
   <Header></Header>
   
    <Nuxt />
     
  </div>
</template>

<script>
import Header from '@/components/comunes/header'
  export default {
     name:'defaulLayout',
      components: { Header},
  }
  </script>

<style>
 
</style>
