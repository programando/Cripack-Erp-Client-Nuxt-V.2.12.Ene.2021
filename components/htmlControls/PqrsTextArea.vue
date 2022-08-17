<template>
  <div class="w-full">
        <textarea
        class="w-full px-2 py-2 text-blue-600 placeholder-gray-700 bg-white border border-gray-300  outline-none focus:outline-none focus:bg-gray-100"
        cols="30"
        rows="3"
        :value   = "value"    
  ></textarea>

  </div>
  
</template>

<script>
export default {
  name: 'PqrsTextArea',
  data() {
      return {
        
      }
  },
  props: {
      value: String,

    } ,

};
</script>

<style></style>
