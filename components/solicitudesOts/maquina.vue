<template>
  <div :class="width">
    <div>
       <VueSelect :data="Maquinas" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
    </div>
      <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left text-red-500" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
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
          dataInicial   : [],
          idItemSelected: 0,
          itemSelected  : 'Seleccione una opción...',
          Maquinas      : [],
          hasError : this.errors,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_maquina === value;
      });
      this.hasError=[];
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