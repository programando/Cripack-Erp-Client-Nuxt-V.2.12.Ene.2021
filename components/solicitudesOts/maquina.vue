<template>
  <div :class="width">
    <div>
       <VueSelect :data="Maquinas" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
    </div>
      <div v-if="prueba" class="mt-2 ml-1 text-xs text-left text-red-500" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> Ha ocurrido un error
      </div> 
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Maquinas from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtMaquina'  ,
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
          Maquinas: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
          prueba: true
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_maquina === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_maquina']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_maquina );
    }
  },

    mounted() {
          Maquinas.getMaquinas() 
          .then( response => {
              this.dataInicial = response.data;
              this.Maquinas   = this.getAloneArray( response.data );
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