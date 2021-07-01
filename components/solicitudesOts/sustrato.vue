<template>
  <div :class="width">
      <VueSelect :data="sustratos" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
      <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left w-96" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
      </div>   
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Sustratos from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtSustrato'  ,
    props: {
      width: String,
      errors: {
                type: Array,
                default: () => []
            },
    } ,
    components: { VueSelect  },
    data() {
      return  {
          dataInicial :[],
          sustratos: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_sustrato === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_sustrato']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_sustrato );
    }
  },

    mounted() {
          Sustratos.getSustratos() 
          .then( response => {
              this.dataInicial = response.data;
              this.sustratos   = this.getAloneArray( response.data );
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
