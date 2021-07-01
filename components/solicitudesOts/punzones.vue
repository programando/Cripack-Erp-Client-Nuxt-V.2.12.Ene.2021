<template>
  <div :class="width">
      <VueSelect :data="Punzones" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
      <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left w-96" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
      </div>  
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Punzones from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtPunzones'  ,
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
          Punzones: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_punzon === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_punzon']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_punzon );
    }
  },

    mounted() {
          Punzones.getPunzones() 
          .then( response => {
              this.dataInicial = response.data;
              this.Punzones   = this.getAloneArray( response.data );
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