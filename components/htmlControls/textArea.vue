<template>
  <div class="w-full">
    <textarea
    class="w-full px-4 py-2 text-blue-600 placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:outline-none focus:bg-gray-100"
    name="observaciones"
    cols="80"
    rows="2"
    :value   = "value"    
    @input   = "$emit('input', $event.target.value)"
    @keydown = "$emit('keydown', $event)"
    @blur    = "$emit('blur', $event)"
    @keyup   = "$emit('keyup', $event)"    
  ></textarea>
    <div v-if="errors" class="mt-2 ml-1 text-xs text-left text-red-500" :class="[setColorError]">
        <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> ha ocurrido un error
    </div>    
  </div>
  
</template>

<script>
export default {
  name: 'TextArea',
  data() {
      return {
        
      }
  },
  props: {
      value: String,
      errors: {
                type: Array,
                default: () => []
            },
    } ,

  computed: {
      setColorError() {
                switch (this.colorError) {
                    case 'red':
                        return 'text-red-600'
                        break;

                    case 'green':
                        return 'text-green-600'
                        break;
                     case 'white':
                        return 'text-white'
                        break;               
            
                    default:
                        break;
                } 
            },
    },

};
</script>

<style></style>
