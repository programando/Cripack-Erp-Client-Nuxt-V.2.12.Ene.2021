<template>
  <div class="flex justify-center">
    
    <div class="flex justify-center w-full">
      <font-awesome-icon class="z-10 h-8 mt-2 -mr-8" :icon="['fas', 'lock']" />
      <Password class="w-full " 
          :toggle      = "true"
          :placeholder = "text"
            v-model    = "recordSource"
            @keyup     = "$emit('keyup', $event)" >
      </Password>
    </div>
    

  </div>
</template>

<script>
    import Password from 'vue-password-strength-meter';
    export default {
      name: "ButtonPassword",
      props: {
        text: String,
        vmodel   : String,
        colorError: String
      },
      components:{
        Password
      },
    data () {
      return {
        recordSource: this.vmodel,
        errors : [],
      }
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

    watch :{
      recordSource ( newDate ){
          this.$emit('input', newDate);
      },
      vmodel ( newDate ) {
          this.recordSource = newDate;
      },
    },

    };
</script>

<style>
  input.Password__field {
    padding-left: 35px;
  }

  .Password.w-full {
    max-width: 100%;
  }
  
</style>
