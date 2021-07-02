<template>
  <div :class="width">
    <div class="mb-1">
      <VueSelect :data="sustratos" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
    </div>
      
      <div v-if="prueba" class="w-40 mt-2 ml-1 text-xs text-left text-red-500" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> Ha ocurrido un error
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
          prueba: true
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
