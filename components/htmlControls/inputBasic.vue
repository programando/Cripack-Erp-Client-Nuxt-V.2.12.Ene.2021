<template>
  <div :class="[width]">
      <div class="flex items-center justify-center">
          <label v-if="label"
            class="w-32 mb-1 form-label"
            :class="[setColorLabel]"
            :for="id">
               {{ label }}
          </label >    
          <div class="relative flex items-center w-full">
            <div class="z-10 -mr-8" v-if="icon">
                <font-awesome-icon class="" :icon="['fas', 'envelope']"/>
            </div>
            
            <input 
             class="w-full px-4 py-1 text-xs text-blue-600 bg-white border border-gray-300 rounded outline-none placeholder-azul focus:bg-gray-100"    
                :id="id"
                ref="input"
                v-bind="$attrs"       
                :class="[
                    { 'border-red-400': errors.length     },
                    {   'px-10': icon },
                    {   'uppercase': isUppercase },
                ]"
                :type    = "type"
                :value   = "value"
                @input   = "$emit('input', $event.target.value)"
                @keydown = "$emit('keydown', $event)"
                @blur    = "clearError()"
                @keyup   = "$emit('keyup', $event)"
                :placeholder="text"
            />
            
        </div>
      </div>
        <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left " :class="[setColorError]">
            <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
        </div>      
  </div>
</template>

<script>
//@blur    = "$emit('blur', $event)"
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
            colorError: String,
            colorLabel: String,
            width: String,
            border: String,
            isUppercase:String
        },

        methods : {
            clearError(e){
                this.errors.splice(0);
                this.$emit('blur', e);
            },
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
            },
            setColorLabel() {
                switch (this.colorLabel){
                    case 'black':
                        return 'text-black'
                        break;
                    case 'white':
                        return 'text-white'
                }
            },
            
        },

        
    }
</script>