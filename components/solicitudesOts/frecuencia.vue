<template>
  <div :class="width">
      <VueSelect :data="Frecuencias" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>

      <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left w-96" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
      </div>   
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Frecuencias from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtFrecuencia'  ,
    props: {
      width     : String,
      colorError: String,
      errors    : {
                type: Array,
                default: () => []
            },
    } ,
    components: { VueSelect  },
    data() {
      return  {
          dataInicial :[],
          Frecuencias: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:-1,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_frecuencia === value;
      });
      this.errors.splice(0);
     this.$emit('input', this.idItemSelected[0]['id_frecuencia']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_frecuencia );
    }
  },

    mounted() {
          Frecuencias.getFrecuencias() 
          .then( response => {
              this.dataInicial = response.data;
              this.Frecuencias   = this.getAloneArray( response.data );
          })
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
    },

  }
</script>