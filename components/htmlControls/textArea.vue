<template>
  <div class="w-full">
    <textarea
    class="w-full px-4 py-2 text-blue-600 placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:outline-none focus:bg-gray-100"
    name="observaciones"
    cols="80"
    rows="2"
  ></textarea>
    <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left w-96" :class="[setColorError]">
        <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
    </div>  
  </div>
  
</template>

<script>
export default {
  name: 'TextArea',
  props: {
      
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
