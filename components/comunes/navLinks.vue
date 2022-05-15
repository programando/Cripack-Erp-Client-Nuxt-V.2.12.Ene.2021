<template>
  <div >
    <nuxt-link :to="to">
      <h3 class="text-sm text-white">{{text}}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    text: String,
    to: String
  }
};
</script>

<style></style>
