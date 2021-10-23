<template>
  <div v-show="spiner" class="relative">
    <div class="absolute flex items-center justify-center top-28 left-1/3">
        <div class="border-b-2 rounded-full border-azul animate-spin h-96 w-96"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    spiner: Boolean
  }
}
</script>

<style>

</style>