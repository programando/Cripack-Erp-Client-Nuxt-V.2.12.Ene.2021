<template>
  <div :class="width">
      <VueSelect :data="AyudaPega" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
      <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left w-96" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
      </div>   
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import AyudaPega from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtAyudaPega'  ,
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
          AyudaPega: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_ayudapega === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_ayudapega']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_ayudapega );
    }
  },

    mounted() {
          AyudaPega.getAyudaPega() 
          .then( response => {
              this.dataInicial = response.data;
              this.AyudaPega   = this.getAloneArray( response.data );
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