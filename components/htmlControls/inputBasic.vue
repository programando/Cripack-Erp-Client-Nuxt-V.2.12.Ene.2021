<template>
  <div>
      <div class="flex items-center justify-center">
          <label v-if="label"
            class="w-32 mb-1 font-semibold text-white form-label"
            :for="id">
               {{ label }}
          </label >    
          <div class="relative flex items-center w-full">
            <div class="z-10 -mr-8" v-if="icon">
                <font-awesome-icon class="" :icon="['fas', 'envelope']"/>
            </div>
            
            <input class="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-700 bg-gray-200 border-2 border-gray-400 rounded outline-none focus:bg-white"
                
                :id="id"
                ref="input"
                v-bind="$attrs"       
                :class="[
                    {
                        'border-red-400': errors.length
                    },
                    {
                        'px-10': icon
                    }
                ]"
                :type    = "type"
                :value   = "value"
                @input   = "$emit('input', $event.target.value)"
                @keydown = "$emit('keydown', $event)"
                @blur    = "$emit('blur', $event)"
                @keyup   = "$emit('keyup', $event)"
                :placeholder="text"
            />
            
        </div>
      </div>
        
        <div v-if="errors.length" class="pl-24 mt-1 ml-1 text-xs text-left w-96" :class="[setColorError]">
            <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
        </div>      
  </div>
</template>

<script>
    export default {
        name: 'InputTextBasic',
        inheritAttrs: false,

    

        props: {
            id: {
                type: String,
                default() {
                    return `text-input-${this._uid}`;
                }
            },
            type: {
                type: String,
                default: "text"
            },
            value: String,
            label: String,
            errors: {
                type: Array,
                default: () => []
            },
            
            icon: String,
            text: String,
            colorError: String
            

        },

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
            }
        },

        
    }
</script>