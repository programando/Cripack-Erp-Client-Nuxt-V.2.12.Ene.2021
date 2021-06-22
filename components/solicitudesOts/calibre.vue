<template>
  <div :class="width">
      <VueSelect :data="Calibres" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Calibres from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtCalibre'  ,
    props: [ 'width' ],
    components: { VueSelect  },
    data() {
      return  {
          dataInicial :[],
          Calibres: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_calibre === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_calibre']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_calibre );
    }
  },

    mounted() {
          Calibres.getCalibres() 
          .then( response => {
              this.dataInicial = response.data;
              this.Calibres   = this.getAloneArray( response.data );
          })
    },

  }
</script>