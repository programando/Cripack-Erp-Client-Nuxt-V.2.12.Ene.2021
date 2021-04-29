<template>
  <div class="mt-2">
    <input
      class="px-4 py-2 text-black bg-gray-200 rounded-md focus:outline-none"
      :class="[width,setBorderColor]" 
      :type="type"
      :placeholder="text" 
    />
  </div>
</template>
<script>
export default {
  name: "InputText",
  props:{
    type: String,
    text: String,
    width: String,
    borderColor: String
  },

  computed: {
    setBorderColor() {
      switch (this.borderColor) {
        case 'primary':
          return 'border border-primary'
          break;
      
        case 'secondary':
          return 'border border-secondary'
          break;
        
        case 'extra':
          return 'border border-extra'
          break;
      }
    }
  }


};
</script>
<style></style>

