<template>
  <div :class="width">
      <VueSelect :data="Frecuencias" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Frecuencias from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtFrecuencia'  ,
    props: [ 'width' ],
    components: { VueSelect  },
    data() {
      return  {
          dataInicial :[],
          Frecuencias: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_frecuencia === value;
      });
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

  }
</script>