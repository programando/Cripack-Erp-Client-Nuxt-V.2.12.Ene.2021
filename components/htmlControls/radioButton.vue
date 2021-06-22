<template>
  <div class="flex items-center w-36 ">
    <div class="flex flex-wrap justify-center max-w-sm mx-auto text-center">
      <div class="flex items-center mb-4 mr-8">

        <input type="radio" name="radio1" class="hidden" :value="1" v-model="radioValue" @change="onChange" :id="idCheck"/>
        <label   class="flex items-center cursor-pointer">
          <span class="inline-block w-4 h-4 mr-1 border rounded-full border-grey" ></span>
          Si
        </label>

      </div>


      <div class="flex items-center mb-4 mr-4">
        <input   type="radio" name="radio2" class="hidden" :value="0" v-model="radioValue" @change="onChange" :id="idCheck"/>
        <label    class="flex items-center cursor-pointer">
          <span
            class="inline-block w-4 h-4 mr-1 border rounded-full border-grey"
          ></span>
          No</label
        >
      </div>
    </div>
  </div>
</template>
 
        

<script>
export default {
  name: "radioSelect",
     data () {
      return {
        radioValue   : false,
        identifyRadio: false, 
      }
     },

  computed:{
       idCheck() {
            this.identifyRadio = `input-option-${this._uid}`
            return this.identifyRadio ;
          }, 
   },
    methods: {
      changeValue() {
        let checkControl     = document.getElementById(this.identifyRadio ) ;  
        checkControl.checked = !checkControl.checked;
        this.radioValue      = checkControl.checked;
        this.onChange();
      },
    onChange () {
      this.$emit('input', this.radioValue );
    }
},
}
</script>

<style>
input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: #20286d;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  color: #20286d;
}
</style>
